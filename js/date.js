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

document.querySelector('#startDateFlights').setAttribute('min', minDate);
document.querySelector('#endDateFlights').setAttribute('min', minDate);
document.querySelector('#startDateHotels').setAttribute('min', minDate);
document.querySelector('#endDateHotels').setAttribute('min', minDate);
document.querySelector('#startDateCars').setAttribute('min', minDate);
document.querySelector('#endDateCars').setAttribute('min', minDate);







