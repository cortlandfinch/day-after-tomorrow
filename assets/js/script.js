// key for weather api from OpenWeather
var weatherKey = '4e3a40b45599c64b9dff328b5ad41a37';
var currentDay = moment().format('L');
var userSearchHistory = [];

// function for user search using fetch to OpenWeather API for city
function userSearchCurrent(city) {
  var weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherKey}`;
}