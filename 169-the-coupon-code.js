// Codewars Challenge 2024
// 169/366
// https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

function parseDate(dateString) {
  // Membuat objek Date dari string
  let date = new Date(dateString);

  // Mengatur waktu ke tengah malam (00:00:00)
  date.setHours(0, 0, 0, 0);

  return date;
}

console.log(parseDate("September 5, 2014"));
console.log(parseDate("October 10, 2020"));

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  //   membuat object date dari currentDate dan expirationDate
  let current = parseDate(currentDate);
  let expiration = parseDate(expirationDate);

  // menambahkan 1 hari ke tanggal kadaluwarsa
  expiration.setDate(expiration.getDate() + 1);

  return enteredCode === correctCode && current < expiration;
}

console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));
console.log(checkCoupon("123", "123", "September 5, 2015", "October 1, 2014"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));
