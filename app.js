var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.listen(15075, function(){
  console.log('Server On!');
});
