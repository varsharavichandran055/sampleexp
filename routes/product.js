var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/product',function(req,res){
  res.send('Hello World')
})

router.post('/product',function(req,res){
  res.send('Get a POST request')
})

router.put('/product',function(req,res){
  res.send('Got a put request at /product')
})

router.delete('/product',function(req,res){
  res.send('Got a delete request at /product')
})


module.exports = router;