// Codewars Challenge 2024
// 94/366
// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

function between(a, b) {
  //   const result = [];

  //   for (a; a <= b; a++) {
  //     result.push(a);
  //   }
  //   return result;

  return Array(b - a + 1)
    .fill(1)
    .map((_, i) => a + i);
}

console.log(between(1, 4));
console.log(between(-2, 2));
