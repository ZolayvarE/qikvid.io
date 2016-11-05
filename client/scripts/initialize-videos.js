var initializeLocalVideo = function (source) {

  var localVideo = document.createElement('video');
  localVideo.src = URL.createObjectURL(source);

  localVideo.style = [

    'position: fixed',
    'width: ' + Math.max(innerWidth / 7, 150) + 'px',
    'bottom: 5px',
    'right: 5px',
    'filter: none',
    'z-index: 10'

  ].join('; ');

  localVideo.volume = 0;
  localVideo.play();

  document.body.appendChild(localVideo);

  return localVideo;

};



var initializeRemoteVideo = function (source) {

  clearInterval(loadingIcon.interval);
  document.body.removeChild(loadingIcon.element);

  remoteVideo = document.createElement('video');

  remoteVideo.src = URL.createObjectURL(source);

  
  var resizeVideo = function () {

    var aspectRatio = remoteVideo.videoWidth / remoteVideo.videoHeight;

    if (aspectRatio * innerHeight < innerWidth) {

      remoteVideo.height = innerHeight;

    } else {

      remoteVideo.width = innerWidth;
    }

  };

  document.body.appendChild(remoteVideo);

  resizeVideo();

  setInterval(resizeVideo, 1000);

  remoteVideo.play();


  return remoteVideo;

};











