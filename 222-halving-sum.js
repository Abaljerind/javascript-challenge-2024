// Codewars Challenge 2024
// 222/366
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

function halvingSum(n) {
  let total = 0;
  while (n > 0) {
    total += n;
    n = Math.floor(n / 2);
  }
  return total;
}

console.log(halvingSum(25));
console.log(halvingSum(127));
