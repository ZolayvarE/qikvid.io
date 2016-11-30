var initializePage = function () { 

  document.body.style = 'background-color: #000000; margin: 0px 0px;';

  document.body.innerHTML += '<img id="loadingIcon" src="./assets/loadingIcon.gif">';

  document.getElementById('loadingIcon').style = 'display: none';
  document.getElementById('remoteVideo').style = 'display: none';
  document.getElementById('localVideo').style = 'display: none';

  window.onresize = function () {
    resizeLoadingIcon();
    resizeRemoteVideo();
    resizeLocalVideo();
  };

  resizeRemoteVideo();
  resizeLocalVideo();

  initializeLoadingIcon();

};





