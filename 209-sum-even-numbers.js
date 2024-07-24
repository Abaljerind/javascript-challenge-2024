// Codewars Challenge 2024
// 209/366
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

function sumEvenNumbers(input) {
  return input
    .filter((item) => item % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
