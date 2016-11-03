var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../../client')));

// app.get('*', function (req, res) {
//   res.send('hello!');
// });

module.exports = http.createServer(app);





