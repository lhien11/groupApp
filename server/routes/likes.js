var express = require('express');
var router = express.Router();

var Group = {
  jake_likes: 0,
  denny_likes: 0,
  liz_likes: 0,
  dave_likes: 0
}
var dave = Group.dave_likes;

router.get('/', function(req, res){
  Group.jake_likes ++;
  res.send(Group);
});
router.get('/dave', function(req, res){
  console.log(dave)
  dave++;
  console.log(dave);
  res.send(dave);
});
router.get('/liz', function(req, res){
  res.send(Group.liz_likes);
});
router.get('/denny', function(req, res){
  res.send(Group.denny_likes);
});
router.get('/jake', function(req, res){
  res.send(Group.jake_likes);
});


// router.post('/', function(req, res){
//   console.log("Hey")
//   res.sendStatus(201);
// });
router.post('/dave', function(req, res){
  Group.dave_likes++;
  res.json(Group.dave_likes);
  // res.sendStatus(201);
});
router.post('/liz', function(req, res){
  Group.liz_likes++;
  res.json(Group.liz_likes);
});
router.post('/denny', function(req, res){
  Group.denny_likes++;
  res.json(Group.denny_likes);
});
router.post('/jake', function(req, res){
  Group.jake_likes++;
  res.json(Group.jake_likes);
});


module.exports = router;
