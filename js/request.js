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
  console.log(newCountry.value);
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
