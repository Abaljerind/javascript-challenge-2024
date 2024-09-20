// Codewars Challenge 2024
// 264/366
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let count = 0;

  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .map((item) => +item)
      .reduce((acc, curr) => acc * curr);

    count++;
  }

  return count;
}

console.log(persistence(39));
console.log(persistence(0));
console.log(persistence(25));
console.log(persistence(999));
