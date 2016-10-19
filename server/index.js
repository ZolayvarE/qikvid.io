var server = require('./config/app-config.js');
var app = require('express')();

var port = process.env.PORT || 8443;
server.listen(port);

console.log('HTTPS server Listening on port:', port);


app.get('*', function (req, res) {
  // res.redirect('https://qikvid.herokuapp.com/');
  res.send('hello!');
});

port = process.env.PORT || 8080;

app.listen(port);

console.log('HTTP server Listening on port:', port);














