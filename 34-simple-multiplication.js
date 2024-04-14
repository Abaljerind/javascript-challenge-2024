// Codewars Challenge 2024
// 34/366
// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

// function simpleMultiplication(number) {
//   //   if (number % 2 === 0) {
//   //     return number * 8;
//   //   } else {
//   //     return number * 9;
//   //   }

//   return number % 2 === 0 ? number * 8 : number * 9;
// }

const simpleMultiplication = (number) =>
  number % 2 === 0 ? number * 8 : number * 9;

console.log(simpleMultiplication(2));
