// Codewars Challenge 2024
// 195/366
// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

function reverseNumber(n) {
  //   if (n.toString().includes("-")) {
  //     return -n.toString().split("").splice(1).reverse().join("");
  //   } else if (n.toString().split("").reverse().join("").startsWith("0")) {
  //     return +n.toString()[0];
  //   } else {
  //     return +n.toString().split("").reverse().join("");
  //   }

  let isNegative = n < 0;
  let reverseAsString = Math.abs(n).toString().split("").reverse().join("");
  let result = +reverseAsString;

  return isNegative ? -result : result;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(1000));
console.log(reverseNumber(4321234));
