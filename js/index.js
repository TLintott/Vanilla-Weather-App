//Day & Time
function showDayTime() {
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
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
    "Saturday"
  ];
  let day = days[now.getDay()];

  let dayTime = document.querySelector("#dayTime");
  date.innerHTML = day + " " + hours + ":" + minutes;
}

window.addEventListener("DOMContentLoaded", showDayTime);

//Search Engine 

function findTemperature(response){
 let temperature =document.querySelector("#temporature");
 let city = document.querySelector("#city");
 let description = document.querySelector("#description");
 let humidity = document.querySelector("#humidity");
 let wind = document.querySelector("#wind");
 let icon = document.querySelector("#icon");

 let celsiusTemperature = response.data.main.temp;

 temperature.innerHTML= Math.round(celsiusTemperature);
 city.innerHTML = response.data.name




}

function search(city) {
let apiKey = "4b123t2611cd046f6e3o15d4a0230eef";
let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
axios.get(apiUrl).then(displayTemperature);
console.log(apiUrl)
}
