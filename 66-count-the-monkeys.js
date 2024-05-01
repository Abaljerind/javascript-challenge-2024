// Codewars Challenge 2024
// 66/366
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

function monkeyCount(n) {
  return Array(n)
    .fill(0)
    .map((_, index) => {
      return index + 1;
    });
}

console.log(monkeyCount(5));
console.log(monkeyCount(3));
console.log(monkeyCount(9));
console.log(monkeyCount(10));
console.log(monkeyCount(20));
