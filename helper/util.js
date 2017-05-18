// module.exports={
  let convertDate = function(str) {
    var tanggalFull = new Date(str);
    var hariAngka = tanggalFull.getDay();
    var tanggal = tanggalFull.getDate();
    var bulanAngka = tanggalFull.getMonth();
    var tahun = tanggalFull.getFullYear();
    var jam = tanggalFull.getHours();
    var menit = tanggalFull.getMinutes();

    switch (hariAngka) {
    case 0:
        hariAngka = "Sunday";
        break;
    case 1:
        hariAngka = "Monday";
        break;
    case 2:
        hariAngka = "Tuesday";
        break;
    case 3:
        hariAngka = "Wednesday";
        break;
    case 4:
        hariAngka = "Thursday";
        break;
    case 5:
        hariAngka = "Friday";
        break;
    case 6:
        hariAngka = "Saturday";
    }

    switch (bulanAngka) {
    case 0:
        bulanAngka = "Jan";
        break;
    case 1:
        bulanAngka = "Feb";
        break;
    case 2:
        bulanAngka = "March";
        break;
    case 3:
        bulanAngka = "April";
        break;
    case 4:
        bulanAngka = "May";
        break;
    case 5:
        bulanAngka = "June";
        break;
    case 6:
        bulanAngka = "July";
        break;
    case 7:
        bulanAngka = "Aug";
        break;
    case 8:
        bulanAngka = "Sep";
        break;
    case 9:
        bulanAngka = "Oct";
        break;
    case 10:
        bulanAngka = "Nov";
        break;
    case 11:
        bulanAngka = "Dec";
    }

  return `${hariAngka}, ${tanggal} ${bulanAngka} ${tahun}, ${jam}:${menit}`

  }
// }
module.exports=convertDate;

// console.log(convertDate('Mon May 15 2017 13:12:15 GMT+0700 (WIB)'));