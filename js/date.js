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
