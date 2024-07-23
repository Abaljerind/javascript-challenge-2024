// Codewars Challenge 2024
// 205/366
// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript

function countRedBeads(n) {
  return n < 2 ? 0 : n * 2 - 2;
}

console.log(countRedBeads(0));
console.log(countRedBeads(1));
console.log(countRedBeads(3));
console.log(countRedBeads(5));
