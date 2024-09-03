document.addEventListener('DOMContentLoaded', () => {
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
    const timerDisplay = document.getElementById("timer");
    const submitButton = document.getElementById("btn");

    function formatTime(value) {
        return value.toString().padStart(2, '0');
    }

    function updateTimerDisplay(hours, minutes, seconds) {
        timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    }

    function startTimer(hours, minutes, seconds) {
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        const timerInterval = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                updateTimerDisplay(0, 0, 0);
                return;
            }

            totalSeconds--;

            const hrs = Math.floor(totalSeconds / 3600);
            const mins = Math.floor((totalSeconds % 3600) / 60);
            const secs = totalSeconds % 60;

            updateTimerDisplay(hrs, mins, secs);
        }, 1000);
    }

    submitButton.addEventListener('click', () => {
        const hours = parseInt(hoursInput.value, 10) || 0;
        const minutes = parseInt(minutesInput.value, 10) || 0;
        const seconds = parseInt(secondsInput.value, 10) || 0;

        startTimer(hours, minutes, seconds);
    });
});
