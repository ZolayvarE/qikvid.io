var server = require('./server-config.js');

require('socket.io')
  .listen(server)
  .on('connection', function (socket) {

    socket.on('request to join room', function (roomName) {
      
      var room = socket.adapter.rooms[roomName];
      var webRTCTargets;

      if (!room) {

        socket.join(roomName);

        webRTCTargets = [];

      } else if (room.sockets.length >= 2) {

        webRTCTargets = [];

      } else {

        webRTCTargets = Object.keys(room.sockets);

        socket.join(roomName);

      }

      socket.emit('webRTC targets', {
        selfId: socket.id,
        targets: webRTCTargets
      });

    });


    socket.on('webRTC offer', function (data) {

      socket.to(data.recipientId).emit('webRTC offer', data);

    });


    socket.on('webRTC answer', function (data) {

      socket.to(data.recipientId).emit('webRTC answer', data);

    });


    socket.on('ICE candidate', function (data) {

      socket.to(data.recipientId).emit('ICE candidate', data);

    });



    socket.on('ICE merge', function (data) {

      socket.to(data.recipientId).emit('ICE merge', data);

    });

  });

module.exports = server;











