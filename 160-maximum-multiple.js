// Codewars Challenge 2024
// 160/366
// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

console.log(maxMultiple(2, 7));
console.log(maxMultiple(3, 10));
console.log(maxMultiple(7, 17));
console.log(maxMultiple(10, 50));
