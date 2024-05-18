// Codewars Challenge 2024
// 97/366
// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8. => jadi a - b setelah di kalikan tiap item didalam array nya
// function findDifference(a, b) {
//   //   const arrayA = a.reduce((accumulator, currentValue) => {
//   //     return accumulator * currentValue;
//   //   });

//   //   const arrayB = b.reduce((accumulator, currentValue) => {
//   //     return accumulator * currentValue;
//   //   });

//   //   return Math.abs(arrayA - arrayB);

//   return Math.abs(
//     a.reduce((accumulator, currentValue) => {
//       return accumulator * currentValue;
//     }) -
//       b.reduce((accumulator, currentValue) => {
//         return accumulator * currentValue;
//       })
//   );
// }

function volume(count) {
  return count.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
}

function findDifference(a, b) {
  return Math.abs(volume(a) - volume(b));
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([15, 20, 25], [10, 30, 25]));
console.log(findDifference([25, 1, 24], [23, 28, 26]));
