(function () {

  document.body.style = 'background-color: #000000; margin: auto';
  var loadingImage = document.createElement('img');
  loadingImage.src = './assets/loadingIcon.gif';

  if (window.innerWidth > window.innerHeight) {

  } else {

  }

  loadingImage.height = window.innerHeight * 0.66;
  loadingImage.width = window.innerHeight * 0.66;
  loadingImage.style = [
    'position: relative;',
    'left: ' + ((window.innerWidth - loadingImage.width) / 2) + 'px;',
    'top: ' + ((window.innerHeight - loadingImage.height) / 2) + 'px;'
  ].join('');

  document.body.appendChild(loadingImage);


  // navigator.getUserMedia({
  //   video: true,
  //   audio: true,
  // }, function () {

  // });

  window.socket = io.connect();

  socket.on('bam', function () {
    console.log(arguments);
  });

  socket.emit('boom', 'hello!');

})();