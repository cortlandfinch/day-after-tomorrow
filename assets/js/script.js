// key for weather api from OpenWeather
var weatherKey = '4e3a40b45599c64b9dff328b5ad41a37';
var searchHistory = [];
// url for openweather
var weatherApiRootUrl = 'https://api.openweathermap.org';
var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var searchHistoryContainer = document.querySelector('#history');
// variable for current weather forecast
var todayContainer = document.querySelector('#today');
// variable for 5 day weather forecast
var forecastContainer = document.querySelector('#forecast');
// button to search for city
var searchButton = document.querySelector('#search-btn');

// search history function
function renderSearchHistory() {
  searchHistoryContainer.innerHTML = '';

  for(let i = searchHistory.length - 1; i >= 0; i--) {
    var btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-controls', 'today forecast');
    btn.classList.add('history-btn', 'btn-history');

    btn.setAttribute('data-search', searchHistory[i]);
    btn.textContent = searchHistory[i];
    searchHistoryContainer.append(btn);
  }
}

function appendToHistory(search) {
  searchHistory.push(search);
  localStorage.setItem('search-history', JSON.stringify(searchHistory));
  renderSearchHistory();
}

function initSearchHistory() {
  var storedHistory = localStorage.getItem('search-history');
  if(storedHistory) {
    searchHistory = JSON.parse(storedHistory);
  }
  renderSearchHistory();
}