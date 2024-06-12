// Codewars Challenge 2024
// 127/366
// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

function isTriangle(a, b, c) {
  //   if (a + b > c && b + c > a && c + a > b) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return a + b > c && b + c > a && c + a > b;
}

console.log(isTriangle(-5, 1, 3));
console.log(isTriangle(0, 2, 3));
console.log(isTriangle(1, 2, 9));
console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
