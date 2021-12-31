var fireworkContainer = document.querySelector('.fireworks');
var day = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var endDate = new Date(2022, 0, 1, 00, 00);
var endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;
    let addZeroes = (num) => (num < 10 ? `0${num}` : num);
    if (endTime < todayTime) {
        clearInterval(countdownInterval);
        document.querySelector(
            ".countdown"
        ).innerHTML = `<h1>Say hi end Coutdown</h1>`;
    } else {
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
        day.textContent = addZeroes(daysLeft);
        hours.textContent = addZeroes(hrsLeft);
        minutes.textContent = addZeroes(minsLeft);
        seconds.textContent = addZeroes(secsLeft);
    }
}
countdown();

let countdownInterval = setInterval(countdown, 1000);


// const fireworks = new Fireworks(fireworkContainer, {
//     speed: 5,
//     acceleration: 1.06,
//     friction: 1,
//     gravity: 2,
//     particles: 650,
//     explosion: 5
// })

// fireworks.start()