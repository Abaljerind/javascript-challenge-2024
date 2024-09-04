// Codewars Challenge 2024
// 251/366
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
  if (number <= 0) return 0;
  return Array(number)
    .fill(0)
    .map((_, index) => index + 1)
    .filter((item) => item < number && (item % 3 == 0 || item % 5 == 0))
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(solution(10));
console.log(solution(20));
console.log(solution(1));
console.log(solution(2));
