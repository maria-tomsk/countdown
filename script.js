const year = document.querySelector('#date');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');


const currentYear = new Date().getFullYear();
const nextYear = new Date(`February 22 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCountdown () {

const currentTime = new Date();
const diff = nextYear - currentTime;


const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;	
const secondsLeft = Math.floor(diff / 1000) % 60;

console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

days.innerText = daysLeft;
hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCountdown();
setInterval(updateCountdown, 1000);
