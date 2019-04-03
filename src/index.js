import XCarousel from './carousel';

function $(selector) {
  return document.querySelector(selector);
}

window.onload = function() {
  const indexShower = $('#index');
  const cal = new XCarousel('#carousel', {
    width: 830,
    height: 420,
    auto: true,
    startIndex: 0,
    delay: 2000,
    direction: 'right',
    onChange: function(index) {
      indexShower.innerText = index;
    }
  });
  const nextButton = $('#next');
  const lastButton = $('#last');
  const playButton = $('#play');
  const stopButton = $('#stop');
  nextButton.onclick = function() {
    cal.next();
  };
  lastButton.onclick = function() {
    cal.last();
  };
  playButton.onclick = function() {
    cal.play();
  };
  stopButton.onclick = function() {
    cal.pause();
  };  
}