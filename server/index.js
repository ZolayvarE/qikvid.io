var server = require('./config/socket-config.js');

var port = process.env.PORT || 8443;

server.listen(port, function () {
  console.log('Server now listening on port:', port);
});


















