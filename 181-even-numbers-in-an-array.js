// Codewars Challenge 2024
// 181/366
// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript

function evenNumbers(array, number) {
  return array.filter((item) => item % 2 === 0).slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));
