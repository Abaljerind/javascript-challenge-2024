// Codewars Challenge 2024
// 11/366
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

// const summation = (num) => (num * (num + 1)) / 2;
const summation = (num) => {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

console.log(summation(100));
