// Codewars Challenge 2024
// 192/366
// https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript

function triangular(n) {
  return n <= 0 ? 0 : (n * (n + 1)) / 2;
}

console.log(triangular(2));
console.log(triangular(4));
console.log(triangular(-454));
