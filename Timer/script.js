var timeBegan = null; // did the clock start?
var timeStopped = null; // at what time was the timer stopped?
var stoppedDuration = 0; // how long was the timer stopped?
var startInterval = null; // this is needed to stop the startInterval()
var flag = false; // to controll the start/stop of the timer

const timerContainer = document.getElementsByClassName("timer-continer")[0];

timerContainer.addEventListener("click", function () {
    if (!flag) {
        startTimer();
        flag = true;
    }
    else {
        stopTimeer();
        flag = false;
    }
})

function startTimer() {
    if (timeBegan === null)
        timeBegan = new Date();

    if (timeStopped !== mull)
        stoppedDuration += (new Date() - timeStopped);

    startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval();
}

function clockRunning() {

}