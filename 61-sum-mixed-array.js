// Codewars Challenge 2024
// 61/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

function sumMix(x) {
  return x
    .map((item) => parseInt(item))
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
}

console.log(sumMix([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
