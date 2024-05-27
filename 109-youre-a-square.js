// Codewars Challenge 2024
// 109/366
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

function isSquare(n) {
  // sisi x sisi = luas persegi, yang dicari itu akar luas persegi untuk menentukan apakah nilai n adalah luas persegi atau bukan
  //   return Number.isInteger(Math.sqrt(n));
  return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
