// Codewars Challenge 2024
// 129/366
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

function binaryArrayToNumber(arr) {
  //   arr = +arr.join("");
  //   return parseInt(arr, 2);

  return parseInt(+arr.join(""), 2);
}

console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([0, 1, 1, 0]));
