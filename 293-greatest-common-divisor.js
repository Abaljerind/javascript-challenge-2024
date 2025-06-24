// Codewars Challenge 2024
// 293/366
// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript

/*

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

*/

function mygcd(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }

  return x;
}

console.log(mygcd(30, 12));
console.log(mygcd(36, 12));
console.log(mygcd(8, 9));
console.log(mygcd(1, 1));
