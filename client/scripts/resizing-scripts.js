var resizeLoadingIcon = function () {
  var loadingIcon = document.getElementById('loadingIcon');

  if (loadingIcon.style.display !== 'none') {
    var shortestSide = Math.min(window.innerWidth, window.innerHeight);
    loadingIcon.height = shortestSide / 2;
    loadingIcon.width = shortestSide / 2;
    loadingIcon.style = [
      'position: relative;',
      'left: ' + ((innerWidth - loadingIcon.width) / 2) + 'px;',
      'top: ' + ((innerHeight - loadingIcon.height) / 2) + 'px;'
    ].join('');
  }
};

var resizeLocalVideo = function () {
  var localVideo = document.getElementById('localVideo');

  if (localVideo.style.display !== 'none') {

    localVideo.style = [
      'position: fixed',
      'bottom: 4px',
      'right: 4px',
      'width: ' + Math.max(window.innerWidth / 6, 140) + 'px'
    ].join(';');

  }
};

var resizeRemoteVideo = function () {
  var remoteVideo = document.getElementById('remoteVideo');

  if (remoteVideo.style.display !== 'none') {
    var videoAspectRatio = remoteVideo.videoWidth / remoteVideo.videoHeight;
    var windowAspectRatio = window.innerWidth / window.innerHeight;

    if (videoAspectRatio < windowAspectRatio) {
      remoteVideo.width = window.innerWidth;
      remoteVideo.height = window.innerHeight;
    } else {
      remoteVideo.height = window.innerHeight;
      remoteVideo.width = window.innerWidth;
    }

  }
};

