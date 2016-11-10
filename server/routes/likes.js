var express = require('express');
var router = express.Router();

var Group = {
  phil_likes: 0,
  casey_likes: 0,
  hien_likes: 0,
}
var phil = Group.phil_likes;

router.get('/', function(req, res){
  Group.phil_likes ++;
  res.send(Group);
});
router.get('/phil', function(req, res){
  console.log(dave)
  dave++;
  console.log(dave);
  res.send(dave);
});
router.get('/casey', function(req, res){
  res.send(Group.casey_likes);
});



// router.post('/', function(req, res){
//   console.log("Hey")
//   res.sendStatus(201);
// });


module.exports = router;
