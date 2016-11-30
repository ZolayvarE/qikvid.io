var initializeLoadingIcon = function () {
  var loadingIcon = document.getElementById('loadingIcon');
  var remoteVideo = document.getElementById('remoteVideo');
  remoteVideo.style = 'display: none';
  loadingIcon.style = '';
  resizeLoadingIcon();
};

var initializeLocalVideo = function (source) {
  var localVideo = document.getElementById('localVideo');
  localVideo.style = '';
  localVideo.src = window.URL.createObjectURL(source);
  resizeLocalVideo();
};

var initializeRemoteVideo = function (source) {
  var loadingIcon = document.getElementById('loadingIcon');
  var remoteVideo = document.getElementById('remoteVideo');
  remoteVideo.style = '';
  loadingIcon.style = 'display: none';
  remoteVideo.src = window.URL.createObjectURL(source);
  setTimeout(resizeRemoteVideo, 500);
};





