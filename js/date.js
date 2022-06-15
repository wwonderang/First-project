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
document.querySelector('#endDateFlights').setAttribute('min', minEndDate);
document.querySelector('#startDateHotels').setAttribute('min', minDate);
document.querySelector('#endDateHotels').setAttribute('min', minEndDate);
document.querySelector('#startDateCars').setAttribute('min', minDate);
document.querySelector('#endDateCars').setAttribute('min', minEndDate);

function validateDate() {
  document.querySelector('#startDateFlights').setAttribute('min', minDate);
  const startDateFlights = document.getElementById('startDateFlights').value;
  const endDateFlights = document.getElementById('endDateFlights').value;
  if(Date.parse(startDateFlights > endDateFlights)) {
    alert('error');
  }
}