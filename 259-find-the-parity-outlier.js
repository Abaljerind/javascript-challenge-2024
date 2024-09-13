// Codewars Challenge 2024
// 259/366
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  const odds = integers.filter((number) => number % 2 !== 0);
  const evens = integers.filter((number) => number % 2 === 0);
  return evens.length === 1 ? evens[0] : odds[0];
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
