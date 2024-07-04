// Codewars Challenge 2024
// 175/366
// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((item) => item % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
console.log(getEvenNumbers([1, 2]));
console.log(getEvenNumbers([12, 14, 15]));
