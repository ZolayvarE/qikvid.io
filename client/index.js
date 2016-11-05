
var loadingIcon = initializePage();

var localVideo;
var webRTC;

navigator.getUserMedia({
  audio: true,
  video: true,
}, function (stream) {

  localVideo = initializeLocalVideo(stream);

  webRTC = initializeWebRTC(stream);

  webRTC.socket.emit('request to join room', location.search);

}, function (error) {

  console.log(error);
  // location.pathname = '/error/nomedia';

});












