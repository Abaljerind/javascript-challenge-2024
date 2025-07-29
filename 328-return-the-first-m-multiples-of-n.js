// Codewars Challenge 2024
// 328/366
// https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript

/*
Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

(3, 5.0) --> [5.0, 10.0, 15.0]


*/

function multiples(m, n) {
  //   const result = [];

  //   for (let i = 1; i <= m; i++) {
  //     result.push(n * i);
  //   }

  //   return result;

  return Array.from({ length: m }).map((_, idx) => ++idx * n);
}

console.log(multiples(3, 5));
