// Codewars Challenge 2024
// 136/366
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number = function (array) {
  return array.map((item, index) => {
    return `${index + 1}: ${item}`;
  });
};

console.log(number([]));
console.log(number(["a", "b", "c"]));
