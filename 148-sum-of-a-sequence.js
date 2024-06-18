// Codewars Challenge 2024
// 148/366
// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }

  const output = [];

  for (begin; begin <= end; begin += step) {
    output.push(begin);
  }
  return output.reduce((acc, curr) => acc + curr);
};

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));
console.log(sequenceSum(2, 2, 2));
