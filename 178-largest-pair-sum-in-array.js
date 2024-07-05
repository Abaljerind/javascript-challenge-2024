// Codewars Challenge 2024
// 178/366
// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum(numbers) {
  //   return numbers
  //     .sort((a, b) => a - b)
  //     .slice(-2)
  //     .reduce((acc, curr) => acc + curr);

  //   numbers = numbers.sort((a, b) => b - a);
  //   return numbers[0] + numbers[1];

  let [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([-100, -29, -24, -19, 19]));
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]));
console.log(largestPairSum([-10, -8, -16, -18, -19]));
