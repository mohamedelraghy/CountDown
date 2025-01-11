let startTime = new Date("2025-01-11");
let timeInterval;

function getTimeElapsed(startTime) {
  const total = Date.parse(new Date()) - Date.parse(startTime);
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function initializeClock(id, startTime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector(".days");
  const hoursSpan = clock.querySelector(".hours");
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    const t = getTimeElapsed(startTime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  timeInterval = setInterval(updateClock, 1000);
}

function resetClock() {
  clearInterval(timeInterval); // Stop the existing interval
  startTime = new Date(); // Reset the start time to the current time
  initializeClock("clockdiv", startTime); // Reinitialize the clock
}

document.getElementById("resetButton").addEventListener("click", resetClock);

// Initialize the clock for the first time
initializeClock("clockdiv", startTime);
