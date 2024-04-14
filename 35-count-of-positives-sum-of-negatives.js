// Codewars Challenge 2024
// 35/366
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
  if (input === null) return [];
  if (input.filter((n) => n != 0).length === 0) return [];

  let countPositive = 0;
  let sumNegative = 0;

  for (const n of input) {
    if (n < 0) sumNegative += n;
    if (n > 0) countPositive += 1;
  }
  return [countPositive, sumNegative];
}

const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives([null, 0]));
console.log(countPositivesSumNegatives([0, 0]));
console.log(countPositivesSumNegatives(testData));
