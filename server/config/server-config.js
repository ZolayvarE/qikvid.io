var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

app.get('/error/nomedia', function (req, res) {
  res.send('We can\'t detect a working camera & microphone. Sorry!');
});

app.use(express.static(path.join(__dirname, '../../client')));

app.get('*', function (req, res) {
  res.redirect('/?room=' + req.url.slice(1));
});

module.exports = http.createServer(app);









