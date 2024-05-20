// Codewars Challenge 2024
// 103/366
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((item) => item * item)
    .join("");
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
