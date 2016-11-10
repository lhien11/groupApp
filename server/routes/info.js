var express = require('express');
var router = express.Router();
var info = require('../info/Bio.json');

console.log("test", info.array[0].likes);
router.get('/', function(req, res){
  res.send(info);
});

router.post('/', function(req, res){
  res.sendStatus(201);
});


module.exports = router;
