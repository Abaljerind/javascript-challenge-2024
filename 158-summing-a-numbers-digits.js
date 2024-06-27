// Codewars Challenge 2024
// 158/366
// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));
