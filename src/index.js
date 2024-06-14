function updateTime() {


    let londonElement = document.querySelector("#london");
    if (londonElement) {
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment.tz("Europe/London");
    let londonDateElement = londonElement.querySelector(".date");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
    londonDateElement.innerHTML = londonTime.format("MMM Do YYYY");
    
    }
    
    let mauritiusElement = document.querySelector("#mauritius");
    if (mauritiusElement) {
    let mauritiusTimeElement = mauritiusElement.querySelector(".time");
    let mauritiusTime = moment.tz("Indian/Mauritius");
    let mauritiusDateElement = mauritiusElement.querySelector(".date");
    mauritiusTimeElement.innerHTML = mauritiusTime.format("h:mm:ss [<small>]A[</small>]");
    mauritiusDateElement.innerHTML = mauritiusTime.format("MMM Do YYYY");
    
    }
    let pragueElement = document.querySelector("#prague");
    if (pragueElement) {
    let pragueTimeElement = pragueElement.querySelector(".time");
    let pragueTime = moment.tz("Europe/Prague");
    let pragueDateElement = pragueElement.querySelector(".date");
    pragueTimeElement.innerHTML = `${pragueTime.format("h:mm:ss [<small>]A[</small>]")}`;
    pragueDateElement.innerHTML = `${pragueTime.format("MMM Do YYYY")}`;
    
    }
    }


function updateCity(event) {

    
    
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
        cityTimezone = moment.tz.guess ()
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let cityElement = document.querySelector("#current-shown-cities");
    cityElement.innerHTML = `
    
        <div class="city">
            <div>
                <h2>${cityName}</h2>

    <div class="date">${cityTime.format("MMM Do YYYY")}</div></div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div></div>
   <a href="/">All cities</a>
`;
}

updateTime();
setInterval(updateTime, 1000);

let currentCitiesElement = document.querySelector("#cities");
currentCitiesElement.addEventListener("change", updateCity );




