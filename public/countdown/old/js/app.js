let countdownDate = new Date().setSeconds(new Date("Apr 5, 2023 12:00:00").getSeconds());

let countdownDate = new Date("Apr 5, 2023 12:00:00").getTime();
let countdownDate = "Apr 5, 2023 12:00:00";

let timerInterval;

const daysElem = document.getElementById("days"),
  hoursElem = document.getElementById("hours"),
  minutesElem = document.getElementById("minutes"),
  secondsElem = document.getElementById("seconds"),
  timer = document.getElementById("timer"),
  content = document.getElementById("content");

const formatTime = (time, string) => {
  return time == 1 ? `${time} ${string}` : `${time} ${string}s`;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  if (difference < 1) {
    endCountdown();
  }

  let days = Math.floor(difference / (60 * 60 * 24));
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  daysElem.innerHTML = formatTime(days, "day");
  hoursElem.innerHTML = formatTime(hours, "hour");
  minutesElem.innerHTML = formatTime(minutes, "minute");
  secondsElem.innerHTML = formatTime(seconds, "second");
};

const endCountdown = () => {
  clearInterval(timerInterval);
  timer.remove();
  content.classList.add("visible");
};

window.addEventListener("load", () => {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
});

// // Set the date we're counting down to
// var countDownDate = new Date("Apr 5, 2023 12:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("counting").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("counting").innerHTML = "End of Hacking";
//   }
// }, 1000);