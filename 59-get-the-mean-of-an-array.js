// Codewars Challenge 2024
// 59/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks) {
  return Math.floor(
    marks.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }) / marks.length
  );
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
