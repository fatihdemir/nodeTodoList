var moment = require('moment');

var fulldate = moment().format('DD.MM.YYYY');
var gun = moment().format('dddd');
var ay = moment().format('MMMM');



switch (gun) {
  case "Sunday":
    gun = "Pazar";
    break;
  case "Monday":
    gun = "Pazartesi";
    break;
  case "Tuesday":
    gun = "Salı";
    break;
  case "Wednesday":
    gun = "Çarşamba";
    break;
  case "Thursday":
    gun = "Perşembe";
    break;
  case "Friday":
    gun = "Cuma";
    break;
  case "Saturday":
    gun = "Cumartesi";
    break;
  default:
}


switch (ay) {
  case "January":
    ay = "Ocak";
    break;
  case "February":
    ay = "Şubat";
    break;
  case "March":
    ay = "Mart";
    break;
  case "April":
    ay = "Nisan";
    break;
  case "May":
    ay = "Mayıs";
    break;
  case "June":
    ay = "Haziran";
    break;
  case "July":
    ay = "Temmuz";
    break;
  case "August":
    ay = "Ağustos";
    break;
  case "September":
    ay = "Eylül";
    break;
  case "October":
    ay = "Ekim";
    break;
  case "November":
    ay = "Kasım";
    break;
  case "December":
    ay = "Aralık";
    break;
  default:
}

module.exports.gun = gun;
module.exports.ay = ay;
module.exports.tarih = fulldate;
