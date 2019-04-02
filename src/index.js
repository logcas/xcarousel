import XCarousel from './carousel';

window.onload = function() {
  const cal = new XCarousel('#carousel', {
    width: 830,
    height: 420,
    auto: true,
    startIndex: 0,
    delay: 2000,
    direction: 'right',
  });
  const nextButton = document.querySelector('#next');
  const lastButton = document.querySelector('#last');
  const playButton = document.querySelector('#play');
  const stopButton = document.querySelector('#stop');
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