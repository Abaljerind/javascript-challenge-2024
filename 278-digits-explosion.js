// Codewars Challenge 2024
// 278/366
// https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript

/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
"312" should return "333122"
"102269" should return "12222666666999999999"
 */

function explode(s) {
  return s
    .split("")
    .map((s) => s.repeat(s))
    .join("");
}

console.log(explode("312"));
console.log(explode("102269"));
console.log(explode("0"));
console.log(explode("000"));
