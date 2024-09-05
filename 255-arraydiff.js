// Codewars Challenge 2024
// 255/366
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));
console.log(arrayDiff([1, 2, 3], [1, 2]));
