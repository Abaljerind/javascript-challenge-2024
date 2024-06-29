// Codewars Challenge 2024
// 165/366
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
  //   let total = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     total += Math.min(...arr[i]);
  //   }
  //   return total;

  return arr.reduce((acc, curr) => acc + Math.min(...curr), 0);
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ])
);
