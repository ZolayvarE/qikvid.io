var initializePage = function () { 

  document.body.style = 'background-color: #000000; margin: 0px 0px;';
  var loadingIcon = document.createElement('img');
  loadingIcon.src = './assets/loadingIcon.gif';

  var previousWidth;
  var previousHeight;
  var resizeLoadingIcon = function () {
    if (innerWidth === previousWidth && innerHeight === previousHeight) {
      return;
    } else if (innerWidth > innerHeight) {
      var shortestSide = innerHeight;
    } else {
      var shortestSide = innerWidth;
    }

    loadingIcon.height = shortestSide / 2;
    loadingIcon.width = shortestSide / 2;
    loadingIcon.style = [
      'position: relative;',
      'left: ' + ((innerWidth - loadingIcon.width) / 2) + 'px;',
      'top: ' + ((innerHeight - loadingIcon.height) / 2) + 'px;'
    ].join('');

    previousHeight = innerHeight;
    previousWidth = innerWidth;
  };

  resizeLoadingIcon();

  var resizingInterval = setInterval(resizeLoadingIcon, 1000);

  document.body.appendChild(loadingIcon);

  return {
    interval: resizingInterval,
    element: loadingIcon
  };

};





