// Codewars Challenge 2024
// 203/366
// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript

function sumTriangularNumbers(n) {
  return n <= 0 ? 0 : (n * (n + 1) * (n + 2)) / 6;
}

console.log(sumTriangularNumbers(6));
console.log(sumTriangularNumbers(34));
console.log(sumTriangularNumbers(-291));
