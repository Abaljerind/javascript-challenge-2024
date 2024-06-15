// Codewars Challenge 2024
// 139/366
// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {
  const sort = numbers.sort((a, b) => a - b);
  if (sort[0] !== sort[1]) {
    return sort[0];
  } else {
    return sort[sort.length - 1];
  }
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));
console.log(stray([2, 1, 1, 1, 1, 1]));
