// Codewars Challenge 2024
// 137/366
// https://www.codewars.com/kata/559590633066759614000063/train/javascript

/*
TODO:: Write a function that returns both the minimum and maximum number of the given list/array. 
 */
function minMax(arr) {
  //   const min = Math.min(...arr);
  //   const max = Math.max(...arr);
  //   return [max, min];

  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([5]));
