import './style.scss';
import './img/airplane.png';
let key;

let countryList = 'https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json';
fetch(countryList)
.then(response => {

  if(response.ok) {

    return response.json();
}
  throw new Error('Network response was not ok.'); 
}).then(dataCountry => {
  for(key in dataCountry) {
  let newCountry = document.createElement('option');
  newCountry.value = key;
  newCountry.innerHTML = key;
  document.querySelector('#flights-countries').appendChild(newCountry);
  document.querySelector('#countries').appendChild(newCountry.cloneNode(true));
  document.querySelector('#car-countries').appendChild(newCountry.cloneNode(true));
}

document.querySelector('#flights-countries').addEventListener('change', function() {
  let newCity = dataCountry[this.value];

  for(let iterator of newCity) {
    let cityOption = document.createElement('option');
    let flightsCities = document.getElementById('flights-cities');
    let cities = document.getElementById('cities');
    let carCities = document.getElementById('car-cities');
    cityOption.innerHTML = iterator;
    flightsCities.appendChild(cityOption);
    cities.appendChild(cityOption.cloneNode(true));
    carCities.appendChild(cityOption.cloneNode(true));
  }
});
});

let date = new Date();
let tdate = date.getDate();
  if(tdate < 10) {
    tdate = '0' + tdate;
    }

let month = date.getMonth() + 1;

  if(month < 10) {
  month = '0' + month;
  }

let year = date.getUTCFullYear();
let minDate = year + '-' + month + '-' + tdate ;

let endDate = date.getDate() + 1;
if(endDate < 10) {
  endDate = '0' + endDate;
  }

let minEndDate = year + '-' + month + '-' + endDate;
console.log(minEndDate);

document.querySelector('#startDateFlights').setAttribute('min', minDate);
document.querySelector('#startDateHotels').setAttribute('min', minDate);
document.querySelector('#startDateCars').setAttribute('min', minDate);

let startFlights = document.getElementById('startDateFlights');
let endFlights = document.getElementById('endDateFlights');
let startHotels = document.getElementById('startDateHotels');
let endHotels = document.getElementById('endDateHotels');
let startCars = document.getElementById('startDateCars');
let endCars = document.getElementById('endDateCars');

startFlights.addEventListener('change', function() {
    if (startFlights.value) {
        endFlights.min = startFlights.value;
}}, false);
endFlights.addEventListener('change', function() {
    if (endFlights.value) {
        startFlights.max = endFlights.value;
}}, false);

startHotels.addEventListener('change', function() {
  if (startHotels.value) {
      endHotels.min = startHotels.value;
}}, false);
endHotels.addEventListener('change', function() {
  if (endHotels.value) {
      startHotels.max = endHotels.value;
}}, false);

startCars.addEventListener('change', function() {
  if (startCars.value) {
      endCars.min = startCars.value;
}}, false);
endHotels.addEventListener('change', function() {
  if (endCars.value) {
      startCars.max = endCars.value;
}}, false);


let clear = document.getElementById('clearBtn');
clear.addEventListener('click', () => {
  document.querySelector('#startDateFlights').value = '';
  document.querySelector('#endDateFlights').value = '';
  document.querySelector('#flights-cities').value = '';
  document.querySelector('#flights-countries').value = '';
  document.querySelector('#startDateHotels').value = '';
  document.querySelector('#endDateHotels').value = '';
  document.querySelector('#startDateFlights').value = '';
  document.querySelector('#amenities').value = '';
  document.querySelector('#startDateFlights').value = '';
  document.querySelector('#endDateFlights').value = '';
  document.querySelector('#countries').value = '';
  document.querySelector('#cities').value = '';
  document.querySelector('#startDateCars').value = '';
  document.querySelector('#endDateCars').value = '';
  document.querySelector('#car-countries').value = '';
  document.querySelector('#car-cities').value = '';
});
