let timer;
let isRunning = false;
let time = 0;
let mode = "stopwatch"; // Default mode

const display = document.querySelector('.timer-display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const modeSwitch = document.querySelectorAll("input[name='mode']");
const timerInputs = document.getElementById("timer-inputs");

// Switch mode (Stopwatch or Timer)
modeSwitch.forEach(input => {
    input.addEventListener('change', function () {
        mode = this.value;
        reset();
        if (mode === "timer") {
            timerInputs.style.display = "block";
        } else {
            timerInputs.style.display = "none";
        }
    });
});

// Format time to HH:MM:SS
function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Start function
function start() {
    if (!isRunning) {
        if (mode === "timer" && time === 0) {
            const hrs = parseInt(document.getElementById('hours').value) || 0;
            const mins = parseInt(document.getElementById('minutes').value) || 0;
            const secs = parseInt(document.getElementById('seconds').value) || 0;
            time = hrs * 3600 + mins * 60 + secs;
            if (time <= 0) {
                alert("Please enter a valid time for the countdown timer.");
                return;
            }
        }

        isRunning = true;
        timer = setInterval(() => {
            if (mode === "stopwatch") {
                time++;
            } else {
                if (time > 0) {
                    time--;
                } else {
                    clearInterval(timer);
                    isRunning = false;
                    alert("Time's up!");
                }
            }
            display.textContent = formatTime(time);
        }, 1000);
    }
}

// Stop function
function stop() {
    clearInterval(timer);
    isRunning = false;
}

// Reset function
function reset() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    display.textContent = "00:00:00";
    document.getElementById('hours').value = "";
    document.getElementById('minutes').value = "";
    document.getElementById('seconds').value = "";
}

// Event Listeners
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
