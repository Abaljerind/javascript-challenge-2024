// Codewars Challenge 2024
// 48/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num) {
  //your code here
  return Array(num)
    .fill(0)
    .map((_, index) => {
      return `${index + 1} sheep...`;
    })
    .join("");
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
