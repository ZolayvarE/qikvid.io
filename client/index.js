navigator.getUserMedia({
  audio: true,
  video: true,
}, function (stream) {

  initializePage();
  initializeLocalVideo(stream);
  
  webRTC = initializeWebRTC(stream);

  webRTC.socket.emit('request to join room', location.search);

}, function (error) {

  location.pathname = '/error/nomedia';

});












