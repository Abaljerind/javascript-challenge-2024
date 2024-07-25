// Codewars Challenge 2024
// 214/366
// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

function repeats(arr) {
  return arr
    .filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(repeats([4, 5, 7, 5, 4, 8]));
console.log(repeats([9, 10, 19, 13, 19, 13]));
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
