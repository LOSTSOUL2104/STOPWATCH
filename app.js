let seconds = 0;
let minutes = 0;
let hours = 0;
let display_time = document.getElementById("display_time");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display_time.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}
function watchStop() {
  clearInterval(timer);
}
function watchReset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  display_time.innerHTML = "00:00:00";
}
