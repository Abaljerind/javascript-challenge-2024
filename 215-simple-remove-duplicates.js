// Codewars Challenge 2024
// 215/366
// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

function solve(arr) {
  return [...new Set(arr.reverse())].reverse();
  //   const result = [];
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     if (!result.includes(arr[i])) {
  //       result.unshift(arr[i]);
  //     }
  //   }
  //   return result;
}

console.log(solve([3, 4, 4, 3, 6, 3]));
console.log(solve([1, 2, 1, 2, 1, 2, 3]));
console.log(solve([1, 2, 3, 4]));
