let timer;
let seconds = 0;
let minutes = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const timeDisplay = document.getElementById("timeDisplay");

function start() {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    }
}

function stop() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function reset() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    displayTime();
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
        }
    }
    displayTime();
}

function displayTime() {
    const formattedTime = formatTime(minutes) + ':' + formatTime(seconds);
    timeDisplay.textContent = formattedTime;

}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
