var server = require('./config/socket-config.js');

var port = process.env.PORT || 8443;

server.listen(8443, function () {
  console.log('Server now listening on port:', port);
});


















