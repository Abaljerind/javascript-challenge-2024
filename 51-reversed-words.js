// Codewars Challenge 2024
// 51/366
// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

function reverseWords(str) {
  return str.split(" ").reverse().join(" "); // reverse those words
}

console.log(reverseWords("yoda doesn't speak like this"));
console.log(reverseWords("foobar"));
console.log(reverseWords("kata editor"));
console.log(reverseWords("row row row your boat"));
