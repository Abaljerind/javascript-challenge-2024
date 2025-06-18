// Codewars Challenge 2024
// 288/366
// https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript

/*
Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.

Example
For example, when n = 10:

The square of the sum of the numbers is:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025
The sum of the squares of the numbers is:

1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385
Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbers is: 3025 - 385 = 2640
 */

function differenceOfSquares(n) {
  const squareNum = [];

  for (let i = 0; i < n; i++) {
    squareNum.push(i + 1);
  }

  return (
    squareNum.reduce((acc, curr) => acc + curr, 0) ** 2 -
    squareNum.map((num) => num ** 2).reduce((acc, curr) => acc + curr, 0)
  );
}
console.log(differenceOfSquares(5));
console.log(differenceOfSquares(10));
console.log(differenceOfSquares(100));
