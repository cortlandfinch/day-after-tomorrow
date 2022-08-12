// key for weather api from OpenWeather
var weatherKey = '4e3a40b45599c64b9dff328b5ad41a37';


var citySearchEl = document.querySelector("#citySearch");
var cityInputEl = document.querySelector("#search");
var weatherContainerEl = document.querySelector("#weatherCity");
var userSearchCity = document.querySelector("#city");

var formSubmitHandler = function(event) {
  // preventing page from refreshing
  event.preventDefault();
  // gets the value from input element
  var search = cityInputEl.value.trim();

  if (search) {
    getUserCity(search);

    // clears any old content
    weatherContainerEl.textContent = "";
    cityInputEl.value = "";
  } else {
    alert("Please enter a city name!");
  }
};

