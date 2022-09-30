function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const DELAY = 1000;
let timeId = null;
 
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stoptBtn: document.querySelector('button[data-stop]'),
};
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stoptBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    timeId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, DELAY);
    refs.startBtn.disabled = timeId;
}

function onStopBtnClick() {
    clearInterval(timeId);
    refs.startBtn.disabled = !timeId;
}