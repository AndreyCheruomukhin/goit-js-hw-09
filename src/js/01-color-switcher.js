const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
const mainBody = document.querySelector('body');
let timer = null;

startBtn.addEventListener('click', onClick);
function onClick() {
  startBtn.disabled = true;
  timer = setInterval(evt => {
    let hexColor = getRandomHexColor();
    document.body.style.backgroundColor = hexColor;

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
  }, 1000);

  stoptBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    clearInterval(timer);
  });}

