// Codewars Challenge 2024
// 218/366
// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

function maxDiff(list) {
  //   if (list.length == 0) return 0;
  //   const max = list.sort((a, b) => a - b).slice(-1);
  //   const min = list.sort((a, b) => a - b)[0];
  //   return max - min;

  if (!list.length) return 0;
  return Math.max(...list) - Math.min(...list);
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]));
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]));
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]));
console.log(maxDiff([16]));
console.log(maxDiff([]));
