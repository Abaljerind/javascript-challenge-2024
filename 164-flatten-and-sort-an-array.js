// Codewars Challenge 2024
// 164/366
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort((a, b) => a - b);
}

console.log(flattenAndSort([]));
console.log(flattenAndSort([[], []]));
console.log(flattenAndSort([[], [1]]));
console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
);
