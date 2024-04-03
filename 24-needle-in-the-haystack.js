// Codewars Challenge 2024
// 24/366
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

const haystack_1 = [
  "283497238987234",
  "a dog",
  "a cat",
  "some random junk",
  "a piece of hay",
  "needle",
  "something somebody lost a while ago",
];
console.log(findNeedle(haystack_1));
