var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',function(req,res){
  res.send('Hello World')
})

router.post('/',function(req,res){
  res.send('Get a POST request')
})

router.put('/user',function(req,res){
  res.send('Got a put request at /user')
})

router.delete('/user',function(req,res){
  res.send('Got a delete request at /user')
})


module.exports = router;
