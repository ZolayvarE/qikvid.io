var server = require('./server-config.js');

var io = require('socket.io');
var socket = io.listen(server);

socket.on('connection', function () {

  socket.on('boom', function () {
    console.log(arguments);
    socket.emit('bam', 'hello!');
  });

});

module.exports = server;







