// Codewars Challenge 2024
// 107/366
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
