// Codewars Challenge 2024
// 238/366
// https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript

function maxTriSum(numbers) {
  return [...new Set(numbers)]
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]));
