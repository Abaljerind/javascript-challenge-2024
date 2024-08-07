// Codewars Challenge 2024
// 228/366
// https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/javascript

function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2));
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3));
console.log(nthSmallest([-5, -1, -6, -18], 4));
