function updateTime() {


let londonElement = document.querySelector("#london");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment.tz("Europe/London");
let londonDateElement = londonElement.querySelector(".date");
londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss")} <small>${londonTime.format("A")}</small>`;
londonDateElement.innerHTML = `${londonTime.format("MMM Do YYYY")}`;


let pragueElement = document.querySelector("#prague");
let pragueTimeElement = pragueElement.querySelector(".time");
let pragueTime = moment.tz("Europe/Prague");
let pragueDateElement = pragueElement.querySelector(".date");
pragueTimeElement.innerHTML = `${pragueTime.format("h:mm:ss [<small>]A[</small>]")}`;
pragueDateElement.innerHTML = `${pragueTime.format("MMM Do YYYY")}`;

}

updateTime();
setInterval(updateTime, 1000);
