var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Cuong Nguyen is here!!!!');
});

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port
  console.log(`Sever started at: ${port}`)
});