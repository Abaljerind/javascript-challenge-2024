// Codewars Challenge 2024
// 223/366
// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

function cubeOdd(arr) {
  if (arr.some((item) => typeof item == "string")) return undefined;
  return arr
    .filter((item) => item % 2)
    .map((item) => item ** 3)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd(["a", 12, 9, "z", 42]));
