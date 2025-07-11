const min = document.getElementById("min")
const sec = document.getElementById("sec")
const timer_btn = document.querySelector(".timer-btn")
const work_input = document.getElementById("work-minutes")
const break_input = document.getElementById("break-minutes")

let time = null;
let running = false;
let countdownSeconds = 0;
let onBreak = false;

const updateDisplay = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    min.innerHTML = minutes;
    sec.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

const count = () => {
    if (countdownSeconds <= 0) {
        if (!onBreak) {
            // Start break
            onBreak = true;
            let breakMinutes = parseInt(break_input.value, 10);
            if (isNaN(breakMinutes) || breakMinutes <= 0) breakMinutes = 5;
            countdownSeconds = breakMinutes * 60;
            updateDisplay(countdownSeconds);
            timer_btn.textContent = "On Break";
            timer_btn.disabled = true;
            count();
        } else {
            // End break, reset
            running = false;
            onBreak = false;
            clearTimeout(time);
            timer_btn.textContent = "Start";
            timer_btn.disabled = false;
            work_input.disabled = false;
            break_input.disabled = false;
        }
        return;
    }
    countdownSeconds--;
    updateDisplay(countdownSeconds);
    time = setTimeout(count, 1000);
}

timer_btn.addEventListener("click", () => {
    if (!running) {
        // Start the work timer from input value
        let workMinutes = parseInt(work_input.value, 10);
        let breakMinutes = parseInt(break_input.value, 10);
        let valid = true;
        if (isNaN(workMinutes) || workMinutes <= 0) {
            work_input.focus();
            work_input.style.border = '2px solid red';
            setTimeout(() => { work_input.style.border = ''; }, 1200);
            valid = false;
        }
        if (isNaN(breakMinutes) || breakMinutes <= 0) {
            break_input.focus();
            break_input.style.border = '2px solid red';
            setTimeout(() => { break_input.style.border = ''; }, 1200);
            valid = false;
        }
        if (!valid) return;
        countdownSeconds = workMinutes * 60;
        updateDisplay(countdownSeconds);
        running = true;
        onBreak = false;
        timer_btn.textContent = "Stop";
        work_input.disabled = true;
        break_input.disabled = true;
        count();
    } else {
        // Stop the timer
        running = false;
        clearTimeout(time);
        timer_btn.textContent = `Stopped at ${min.innerHTML.padStart(2, '0')}:${sec.innerHTML}`;
        setTimeout(() => {
            timer_btn.textContent = "Start";
        }, 1500);
        work_input.disabled = false;
        break_input.disabled = false;
        onBreak = false;
    }
});
