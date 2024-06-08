// Codewars Challenge 2024
// 123/366
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN(pin) {
  //   // check if pin has 4 or 6 digits
  //   if (pin.length !== 4 && pin.length !== 6) {
  //     return false;
  //   }
  //   // check if pin contains only digits with regex
  //   if (!/^\d+$/.test(pin)) {
  //     return false;
  //   }
  //   //   ^ = awal string
  //   // \d+ = satu atau lebih digit
  //   //  $ = akhir string
  //   //   test adalah method dari RegExp
  //   return true;

  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("1412"));
console.log(validatePIN("486900"));
console.log(validatePIN("a123"));
console.log(validatePIN("-1234"));
console.log(validatePIN("1.2345"));
console.log(validatePIN("-1.2345"));
console.log(validatePIN("1234678"));
console.log(validatePIN("0000000"));
