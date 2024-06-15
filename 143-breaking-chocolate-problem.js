// Codewars Challenge 2024
// 143/366
// https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript

function breakChocolate(n, m) {
  // if (n > 0 && m > 0) {
  //   return n * m - 1;
  // }
  // return 0;

  return n > 0 && m > 0 ? n * m - 1 : 0;
}

console.log(breakChocolate(5, 5));
console.log(breakChocolate(1, 1));
console.log(breakChocolate(0, 0));
console.log(breakChocolate(9, 10));
