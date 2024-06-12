// Codewars Challenge 2024
// 128/366
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
  //   return Array(n)
  //     .fill(0)
  //     .map((_, index) => {
  //       if (index % 2 != 0) {
  //         return index;
  //       }
  //     })
  //     .filter((item) => item)
  //     .reduce((acc, curr) => acc + curr);
  return n * n * n;
}
console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(42));
