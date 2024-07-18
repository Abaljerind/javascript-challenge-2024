// Codewars Challenge 2024
// 196/366
// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

function minSum(arr) {
  //   const sortedArr =  arr.sort((a, b) => a - b);

  //   let minSum = 0;
  //   let n = sortedArr.length;

  //   for(let i = 0; i < n / 2; i++) {
  //     minSum += arr[i] * arr[n - 1 - i]
  //   }

  //   return minSum

  //   return arr
  //     .sort((a, b) => a - b)
  //     .slice(0, arr.length / 2)
  //     .reduce(
  //       (acc, curr, index) => (acc += curr * arr[arr.length - index - 1]),
  //       0
  //     );

  return arr
    .sort((a, b) => a - b)
    .reduce((acc, curr) => acc + curr * arr.pop(), 0);
}

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([12, 6, 10, 26, 3, 24]));
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));
