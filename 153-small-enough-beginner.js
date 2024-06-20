// Codewars Challenge 2024
// 153/366
// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(arr, limit) {
  //   return arr.every((item) => item <= limit);
  return Math.max(...arr) <= limit;
}

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
