// Codewars Challenge 2024
// 57/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  if (!array) return 0;
  if (array.length < 3) return 0;
  const sorted = array.sort((n1, n2) => n1 - n2);
  return sorted
    .slice(1, -1)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
