let timerValue = 0;
let intervalID;

function incrementCounter() {
    timerValue++;
    let count = document.getElementById("count").innerHTML = timerValue;
}

function startCount() {
    intervalID=setInterval("incrementCounter()", 1000);
}

function stopCount() {
    clearInterval(intervalID);
}

function resumeCount() {
    startCount();
}

function pauseCount() {
    stopCount();
}