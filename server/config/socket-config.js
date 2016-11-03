var server = require('./server-config.js');

var socket = require('socket.io')(server);

socket.on('boom!', function () {
	socket.emit('bam!');
});

module.exports = server;







