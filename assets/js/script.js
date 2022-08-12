// key for weather api from OpenWeather
var weatherKey = '4e3a40b45599c64b9dff328b5ad41a37';
var currentDay = moment().format('L');
var userSearchHistory = [];

// function for user search using fetch to OpenWeather API
function search(userSearch) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=imperial&appid=${weatherKey}`)
  .then(function (weatherInput) {
    return weatherInput.json();
  }).then(function (weatherData) {
    document.getElementById('name').innerHTML = weatherData.name;
    document.getElementById('temp').innerHTML = Math.floor(weatherData.main.temp);
    document.getElementById('wind').innerHTML = data.wind.speed;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    let weatherIcon = weatherData.weather[0].icon;
    document.getElementById()
  })
}
