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

//Search Engine 

function findTemperature(response){
 let temporature =document.querySelector("#temporature");
 let city = document.querySelector("#city");
 let description = document.querySelector("#description");
 let humidity = document.querySelector("#humidity");
 let wind = document.querySelector("#wind");
 let date = document.querySelector("#date");
 let icon = document.querySelector("#icon");

 let celsiusTemperature = response.data.temperature.current;
console.log(response.data);
 date.innerHTML = formatDate(response.data.time * 1000);
 temp.innerHTML= Math.round(celsiusTemperature);
 city.innerHTML = response.data.city;
 description.innerHTML = response.data.condition.description;
 humidity.innerHTML =response.data.temperature.humidity;
 wind.innerHTML= Math.round(response.data.wind.speed);
 icon.setAttribute(
  "src", `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
 );
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

search("London");