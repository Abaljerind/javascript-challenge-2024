// Codewars Challenge 2024
// 117/366
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
  let max = Math.max(a, b),
    min = Math.min(a, b);
  return ((max - min + 1) * (max + min)) / 2;
}

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
console.log(getSum(5, -1));
console.log(getSum(203, 250));
console.log(getSum(-1, 2));
