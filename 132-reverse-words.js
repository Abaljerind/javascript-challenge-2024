// Codewars Challenge 2024
// 132/366
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
console.log(reverseWords("apple"));
console.log(reverseWords("a b c d"));
console.log(reverseWords("double  spaced  words"));
