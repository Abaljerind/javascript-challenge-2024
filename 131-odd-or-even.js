// Codewars Challenge 2024
// 131/366
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(array) {
  return array.reduce((acc, curr) => acc + curr, 0) % 2 ? "odd" : "even";
}

console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
console.log(oddOrEven([]));

console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 3]));
console.log(oddOrEven([1023, 1, 2]));
