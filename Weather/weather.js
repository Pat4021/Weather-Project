
let now = new Date();


let milliSeconds = now.getMilliseconds();



let year = now.getFullYear();




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



let date = now.getDate();


let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let hour = now.getHours();
if (hour < 10) {
    hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
    minute = `0${minute}`;
}
let newDate = document.querySelector(".date");
newDate.innerHTML = `${day} ${date} ${month}, ${hour}:${minute}`;


function newCityTemp(response) {
     document.querySelector(".london").innerHTML = response.data.name;
     document.querySelector(".originalTemp").innerHTML =  Math.round(response.data.main.temp); 
     document.querySelector(".cloud").innerHTML = response.data.weather[0].description;
     document.querySelector(".country").innerHTML = response.data.sys.country;     
     
}

function userLocation(event) {
  event.preventDefault();
  let units = "metric"
  let apiKey = "061254958b012ab279040ab26822d7e4";
  let newCity = document.querySelector("#location-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=${units}` 
  axios.get(apiUrl).then(newCityTemp);
}
let newForm = document.querySelector("#find-location");
newForm.addEventListener("submit", userLocation);


function convertToFarenheit(event) {
    event.preventDefault();  
let temperatureElement = document.querySelector(".originalTemp")
let temperature = temperatureElement.innerHTML
temperature = Number(temperature);
temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32); 
}

function convertToCelcius(event) {
    event.preventDefault();  
let temperatureElement = document.querySelector(".originalTemp")
let temperature = temperatureElement.innerHTML
temperature = Number(temperature);
temperatureElement.innerHTML = Math.round((temperature - 32) * 5 / 9); 
}
 
let farenheitLink = document.querySelector("#farenheit");
farenheitLink.addEventListener("click", convertToFarenheit);

let celciusLink = document.querySelector("#celcius ");
celciusLink.addEventListener("click", convertToCelcius); 


