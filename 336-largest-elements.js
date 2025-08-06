// Codewars Challenge 2024
// 336/366
// https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript

/*
Write a program that outputs the top n elements from a list.

Example:

k = 2; list = [7, 6, 5, 4, 3, 2, 1]
==> [6, 7]
*/

function largest(n, array) {
  //   if (n === 0) return [];
  //   return array.sort((a, b) => a - b).slice(-n);

  return array.sort((a, b) => a - b).slice(array.length - n);
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]));
