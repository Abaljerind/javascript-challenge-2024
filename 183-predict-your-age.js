// Codewars Challenge 2024
// 183/366
// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

function predictAge(...ages) {
  return Math.floor(
    Math.sqrt(
      ages.map((item) => item * item).reduce((acc, curr) => acc + curr)
    ) / 2
  );
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
