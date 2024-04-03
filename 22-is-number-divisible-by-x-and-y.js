// Codewars Challenge 2024
// 22/366
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
  //   if (n % x === 0 && n % y === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //   return n % x === 0 && n % y === 0 ? true : false;
  return n % x === 0 && n % y === 0;
}

console.log(isDivisible(8, 3, 4));
