var https = require('https');
var app = require('express')();

app.get('*', function (req, res) {
  res.send('hello!');
});




var server = https.createServer({}, app);

module.exports = server;





