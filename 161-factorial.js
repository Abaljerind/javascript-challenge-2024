// Codewars Challenge 2024
// 161/366
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

function factorial(n) {
  if (n == 0) return 1;
  if (n > 0 && n <= 12) {
    return n * factorial(n - 1);
  } else {
    throw RangeError;
  }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(13));
