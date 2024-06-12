// Codewars Challenge 2024
// 126/366
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  let count = 0;
  for (count; p0 < p; count++) {
    p0 += ((p0 * percent) / 100 + aug) | 0;
  }
  return count;
}

console.log(nbYear(1000, 0.02, 1000, 50));
console.log(nbYear(1070, 0.02, 1070, 50));
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
console.log(nbYear(1000, 2.0, 50, 1214));
