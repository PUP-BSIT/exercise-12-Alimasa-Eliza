let timerValue = 0;
let intervalID;

function incrementCounter() {
    timerValue++;
    let count = document.getElementById("count").innerHTML = timerValue;
}

function startCount() {
    intervalID=setInterval(incrementCounter, 1000);
}

function stopCount() {
    clearInterval(intervalID);
    timerValue = 0;
    let count = document.getElementById("count").innerHTML = timerValue;
}

function resumeCount() {
    startCount();
}

function pauseCount() {
    clearInterval(intervalID);
}