// Codewars Challenge 2024
// 189/366
// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

function sumCubes(n) {
  return Array(n)
    .fill(0)
    .map((_, index) => index + 1)
    .map((item) => item ** 3)
    .reduce((acc, curr) => acc + curr);

  //   return n == 1 ? n ** 3 : n ** 3 + sumCubes(n - 1);
  //   return ((n * (n + 1)) / 2) ** 2;
}

console.log(sumCubes(1));
console.log(sumCubes(2));
console.log(sumCubes(3));
