var initializeWebRTC = function (ownStream) { 

  var peers = {};
  var socket = io.connect();
  
  var STUN = {
    urls: 'stun:stun.l.google.com:19302'
  };

  var TURN = {
    urls: 'turn:turn.bistri.com:80',
    credential: 'homeo',
    username: 'homeo'
  };

  var ICE = {
    iceServers: [STUN, TURN]
  };



  socket.on('webRTC targets', function (data) {

    data.targets.forEach(function (target) {

      peers[target] = new RTCPeerConnection(ICE);

      peers[target].addStream(ownStream);

      peers[target].onaddstream = function (media) {

        initializeRemoteVideo(media.stream);

      };

      peers[target].onicecandidate = function (event) {

        if (!!event.candidate) {

          socket.emit('ICE candidate', {
            senderId: data.selfId,
            recipientId: target,
            candidate: event.candidate,
          });

        }
      };

      peers[target].oniceconnectionstatechange = function () {

        if (peers[target].iceConnectionState === 'complete') {

          socket.disconnect();

        } else if (peers[target].iceConnectionState === 'failed') {

          location.reload();

        }

      };

      peers[target].createOffer(function (offerObject) {

        peers[target].setLocalDescription(offerObject);

        socket.emit('webRTC offer', {
          recipientId: target,
          senderId: data.selfId,
          offer: offerObject,
        });

      }, function (error) {

        console.log(error);

      });
    });
  });



  socket.on('webRTC offer', function (data) {

    peers[data.senderId] = new RTCPeerConnection(ICE);

    peers[data.senderId].addStream(ownStream);

    peers[data.senderId].onaddstream = function (media) {

      initializeRemoteVideo(media.stream);

    };

    peers[data.senderId].onicecandidate = function (event) {

      if (!!event.candidate) {

        socket.emit('ICE candidate', {
          senderId: data.recipientId,
          recipientId: data.senderId,
          candidate: event.candidate,
        });

      }
    };

    peers[data.senderId].oniceconnectionstatechange = function () {

      if (peers[data.senderId].iceConnectionState === 'complete') {

        socket.disconnect();

      } else if (peers[data.senderId].iceConnectionState === 'failed') {

        location.reload();

      }

    };

    peers[data.senderId].setRemoteDescription(new RTCSessionDescription(data.offer));

    peers[data.senderId].createAnswer(function (answerObject) {
      peers[data.senderId].setLocalDescription(answerObject);
      
      socket.emit('webRTC answer', {
        senderId: data.recipientId,
        recipientId: data.senderId,
        answer: answerObject,
      });

    }, function (error) {
      console.log(error);
    });
  });



  socket.on('webRTC answer', function (data) {
    peers[data.senderId].setRemoteDescription(new RTCSessionDescription(data.answer));
  });



  socket.on('ICE candidate', function (data) {
    peers[data.senderId].addIceCandidate(new RTCIceCandidate(data.candidate));
  });



  socket.on('full room', function () {
    location.pathname = '/error/fullroom'
  });





  return {
    socket: socket,
    peers: peers,
  };


};





