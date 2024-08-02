// Codewars Challenge 2024
// 226/366
// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

var findDigit = function (num, nth) {
  if (nth < 1) return -1;
  let numAbs = Math.abs(num).toString();
  let numStringLength = numAbs.length;
  if (nth > numStringLength) return 0;
  if (nth <= numStringLength) return +numAbs[numStringLength - nth];
};

console.log(findDigit(5673, 4));
console.log(findDigit(-2825, 3));
console.log(findDigit(-456, 4));
console.log(findDigit(0, 20));
console.log(findDigit(65, 0));
console.log(findDigit(24, -8));
