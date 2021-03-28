const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action=start]');
const stopBtn = document.querySelector('[data-action=stop]');
let color = null;

startBtn.addEventListener('click', onClickStartBtn);
stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn(e) {
  e.preventDefault()
  color = setInterval(() => {
    const index = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[index];
  }, 1000);

  if (color) {
    startBtn.disabled = true;
  };
};

function onClickStopBtn(e) {
  e.preventDefault()
  clearInterval(color);
  startBtn.disabled = false;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};