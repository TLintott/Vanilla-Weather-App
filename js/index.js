//Day & Time
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
//Search Engine 

function displayForecast(){  
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  let days = ["Mon", "Tue","Wed", "Thu","Fri"];
  days.forEach(function(day){

 
  forecastHTML= forecastHTML + 
   `
            <div class="col">
              <div class="WeatherForecastPreview">
                <div class="forecast-time">${day}</div>

                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png"
                />
                <div class="forecast-temperature">
                  <span class="forecast-temperature-max">21°</span>
                  <span class="forecast-temperature-min">17°</span>
                </div>
              </div>
            </div>
 `;
 })
forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;

}






function getForecast(coordinates) {
//console.log(coordinates);
  let apiKey = "4b123t2611cd046f6e3o15d4a0230eef";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);
  //console.log(apiUrl);
}




function findTemperature(response){
 let temporature =document.querySelector("#temporature");
 let city = document.querySelector("#city");
 let description = document.querySelector("#description");
 let humidity = document.querySelector("#humidity");
 let wind = document.querySelector("#wind");
 let date = document.querySelector("#date");
 let icon = document.querySelector("#icon");

 let celsiusTemperature = response.data.temperature.current;
//console.log(response.data);
 date.innerHTML = formatDate(response.data.time * 1000);
 temperature.innerHTML= Math.round(celsiusTemperature);
 city.innerHTML = response.data.city;
 description.innerHTML = response.data.condition.description;
 humidity.innerHTML =response.data.temperature.humidity;
 wind.innerHTML= Math.round(response.data.wind.speed);
 icon.setAttribute(
  "src", `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
 );

 getForecast(response.data.coordinates)
}



function search(city){
let apiKey = "4b123t2611cd046f6e3o15d4a0230eef";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=4b123t2611cd046f6e3o15d4a0230eef&units=metric`;
axios.get(apiUrl).then(findTemperature);

}


function handleSubmit (event) {
  event.preventDefault();
  let cityinput = document.querySelector("#city-input");
  search (cityinput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


//units 

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let celsiusTemperature = parseFloat(temperatureElement.innerHTML);
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let fahrenheitTemperature = parseFloat(temperatureElement.innerHTML);
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);


search("London");
displayForecast();