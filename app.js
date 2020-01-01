/* eslint-disable */
var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);

app.use(express.static(__dirname + '/dist'));

app.get('*', function(req, res) {
  res.sendfile(__dirname + '/dist/index.html');
});
app.listen(8080);