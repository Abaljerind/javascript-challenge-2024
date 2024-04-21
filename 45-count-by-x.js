// Codewars Challenge 2024
// 45/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }

  return z;
}

console.log(countBy(1, 10)); // panjangnya 10, nilainya 1 x 1 sampe 1 x 10
console.log(countBy(2, 5)); // panjangnya 5, nilainya 1 x 2 sampe 5 x 2
