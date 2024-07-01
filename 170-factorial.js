// Codewars Challenge 2024
// 170/366
// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

function factorial(n) {
  return n == 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(7));
