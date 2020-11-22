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
    let cityHeading = document.querySelector("h1");
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
    let weatherElement = document.querySelector("h1");
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    weatherElement.innerHTML = `It is ${temperature} degrees, ${description}, in ${response.data.name}`;
    let iconElement = document.querySelector("#icon");
    let humidityElement = document.querySelector ("#humidity");
    let windElement = document.querySelector ("#wind");
    humidityElement.innerHTML = response.data.humidity;
    windElement.innerHTML = response.data.wind.speed;
  }
{
    let form = document.querySelector("#search-form");
    form.addEventListener("submit", search);
    function showWeather(response) {
    console.log(response.data);
    let weatherElement = document.querySelector("h4");
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    weatherElement.innerHTML = `It is ${temperature} degrees, ${description}, in ${response.data.name}`;
    iconElement.innerHTML = `"http://openweathermap.org/img/wn/10d@2x.png"`;
}
}

function showPosition (position) {
    console.log (position);
    console.log (position.coords.latitude);
    console.log (position.coords.longitude);

}

navigator.geolocation.getCurrentPosition (showPosition);













