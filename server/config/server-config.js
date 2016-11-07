var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

app.get('/error/nomedia', function (req, res) {
  res.send('We can\'t detect a working camera & microphone. If you have a working camera & microphone, try refreshing the page.');
});

app.get('/error/fullroom', function (req, res) {
  res.send('Uh-oh. That room is full. Please try another one.');
});

app.use(express.static(path.join(__dirname, '../../client')));

app.get('*', function (req, res) {
  res.redirect('/?room=' + req.url.slice(1));
});

module.exports = http.createServer(app);









