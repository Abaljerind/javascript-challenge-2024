// Codewars Challenge 2024
// 243/366
// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll(arr) {
  return function (multiplier) {
    return arr.map(function (num) {
      return num * multiplier;
    });
  };
}

console.log(multiplyAll([1, 2, 3])(2));
console.log(multiplyAll([1, 2, 3])(1));
console.log(multiplyAll([])(10));
