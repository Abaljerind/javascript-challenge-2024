// Codewars Challenge 2024
// 201/366
// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript

function sortGiftCode(code) {
  return code.split("").sort().join("");
}

console.log(sortGiftCode("abcdef"));
console.log(sortGiftCode("pqksuvy"));
console.log(sortGiftCode("zyxwvutsrqponmlkjihgfedcba"));
