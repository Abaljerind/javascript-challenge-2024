// Codewars Challenge 2024
// 225/366
// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

function findDeletedNumber(arr, mixArr) {
  //   const set1 = new Set(mixArr);
  //   return +arr.filter((item) => !set1.has(item)).join("");

  return (
    arr.reduce((acc, curr) => acc + curr, 0) -
    mixArr.reduce((acc, curr) => acc + curr, 0)
  );
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]));
console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3])
);
