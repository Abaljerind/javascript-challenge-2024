// Codewars Challenge 2024
// 242/366
// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript

function menFromBoys(arr) {
  // remove duplication
  arr = [...new Set(arr)];

  // declare odd & even array
  const evenArr = arr.filter((item) => item % 2 === 0).sort((a, b) => a - b);
  const oddArr = arr.filter((item) => item % 2 !== 0).sort((a, b) => b - a);

  // return evenArr & oddArr with flat function
  return [...evenArr, ...oddArr];
}

console.log(menFromBoys([7, 3, 14, 17]));
console.log(menFromBoys([20, 33, 50, 34, 43, 46]));
console.log(menFromBoys([-32, -39, -35, -41]));
