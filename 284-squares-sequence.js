// Codewars Challenge 2024
// 284/366
// https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

/*

Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]

 */

function squares(x, n) {
  if (n < 1) return [];

  let result = [x];

  for (let i = 1; i < n; i++) {
    result.push(result[i - 1] ** 2);
  }

  return result;
}

console.log(squares(2, 5));
console.log(squares(3, 3));
console.log(squares(5, 3));
console.log(squares(4, 3));
console.log(squares(5, -1));
