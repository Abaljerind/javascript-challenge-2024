// Codewars Challenge 2024
// 258/366
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

function countBits(n) {
  // return n.toString(2).split('').reduce((acc, curr) => acc + parseInt(curr), 0)
  return n.toString(2).split("0").join("").length;
}

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
