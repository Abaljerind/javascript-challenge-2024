// Codewars Challenge 2024
// 194/366
// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

function findLongest(array) {
  //   const digitCounts = array.map((item) => item.toString().length);
  //   const maxDigits = Math.max(...digitCounts);
  //   return array.find((num) => num.toString().length === maxDigits);
  return array.reduce((acc, curr) =>
    `${curr}`.length > `${acc}`.length ? curr : acc
  );
}

console.log(findLongest([1, 10, 100]));
console.log(findLongest([9000, 8, 800]));
console.log(findLongest([8, 900, 500]));
