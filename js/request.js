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
  document.querySelector('#countries').appendChild(newCountry);
  document.querySelector('#car-countries').appendChild(newCountry.cloneNode(true));
}

document.querySelector('#countries').addEventListener('change', function() {
  let newCity = dataCountry[this.value];
  for(let iterator of newCity) {
    let cityOption = document.createElement('option');
    let cities = document.getElementById('cities');
    let carCities = document.getElementById('car-cities');

    cityOption.innerHTML = iterator;
    cities.appendChild(cityOption);
    carCities.appendChild(cityOption.cloneNode(true));
  }
});
});

