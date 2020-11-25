let currentTime= new Date();
console.log (currentTime);

let now = new Date();
let day = now.getDay();
let newTime = new Intl.DateTimeFormat("en",{
    timeStyle: "short"
});
function formatDate(date){
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday"
    ];

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

let currentDay = days[day];
let month = months [now.getMonth()];
let currentDate = now.getDate ();
let year = now.getFullYear();
let currentHour = newTime;
let formattedDate = `${currentDay} ${month} ${currentDate}, ${year} ${currentHour.format(
    Date.now()
)}`;
let h2 = document.querySelector ("h2");
h2.innerHTML = formattedDate;
    return currentDate;
}
 formatDate();
console.log(formatDate(currentTime));


function search(event) {
    event.preventDefault();
    let citySearch = document.querySelector("#search-text-input");
    let cityHeading = document.querySelector("h1,h3");
    cityHeading.innerHTML = citySearch.value;
    let apikey = "62ab349fdee116c5aab9ac5a6c835eb5";
    let apiUrl =
      `https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=${apikey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);
  
  function showWeather(response) {
    console.log(response.data);
    let weatherElement = document.querySelector("h3");
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    weatherElement.innerHTML = `${temperature}°, ${description}, in ${response.data.name}`;
    let iconElement = document.querySelector("#icon");
    let humidityElement = document.querySelector ("#humidity");
    let windElement = document.querySelector ("#wind");
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = response.data.wind.speed;
    iconElement.innerHTML = (
        "src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
celciusTemperature = response.data.main.temp;

function showPosition (position) {
    console.log (position);
    console.log (position.coords.latitude);
    console.log (position.coords.longitude);

}

navigator.geolocation.getCurrentPosition (showPosition);

let celciusTemperature = null;

function displayFahrenheitTemperature (event){
    event.preventDefault();
    let fahrenheitTemperature = (celciusTemperature)/ 5 + 32; 
let temperatureElement = document.querySelector ("#temperature");
temperatureElement.innerHTML = Math.round (fahrenheitTemperature);
}

function displayCelciusTemperature (event){
    event.preventDefault();
    let temperatureElement = document.querySelector ("#temperature");
    temperatureElement.innerHTML = Math.round(celciusTemperature);
    }

let fahrenheitlink = document.querySelector ("#fahrenheit-link");
fahrenheitlink.addEventListener ("click", displayFahrenheitTemperature);

let celciuslink = document.querySelector ("#celcius-link");
celciuslink.addEventListener ("click", displayCelciusTemperature);
