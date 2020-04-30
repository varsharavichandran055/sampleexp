var express = require('express');
var app=express();



app.get('/',function(req,res){
  res.send('running at the root level');
});

app.get('/customer/:id',function(req,res){
  res.send('Customer requested id is'+req.params['id']);
});

app.get('/employee/:name',function(req,res){
  res.send('Employee requested is'+req.params.name);
});

app.get('/manager',function(req,res){
  res.send('Manager requested is '+req.query.name);
});
app.listen(3000);