// Codewars Challenge 2024
// 149/366
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

function solution(nums) {
  //   if (nums === null || nums.length === 0) {
  //     return [];
  //   }

  //   return nums.sort((a, b) => a - b);

  //   return nums === null || nums.length === 0 ? [] : nums.sort((a, b) => a - b);
  return (nums || []).sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 10, 5]));
console.log(solution(null));
console.log(solution([]));
console.log(solution([20, 2, 10]));
