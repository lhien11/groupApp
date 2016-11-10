var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var info = require('./routes/info.js');
var likes = require('./routes/likes.js');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/info', info);
app.use('/likes', likes);



app.get('/*', function(req, res) {
  console.log('request params', req.params);
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

//Set Port to 3000
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('server is running on port', app.get('port'));
})
