// Codewars Challenge 2024
// 179/366
// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

function isSortedAndHow(array) {
  //   const sortedAsc = [...array].sort((a, b) => a - b);
  //   const sortedDesc = [...array].sort((a, b) => b - a);

  //   if (sortedAsc.join() === array.join()) {
  //     return "yes, ascending";
  //   } else if (sortedDesc.join() === array.join()) {
  //     return "yes, descending";
  //   } else {
  //     return "no";
  //   }

  //   const sortedAsc = [...array].sort((a, b) => a - b).join();
  //   const sortedDesc = [...array].sort((a, b) => b - a).join();
  //   const arrayStr = array.join();

  //   switch (arrayStr) {
  //     case sortedAsc:
  //       return "yes, ascending";
  //     case sortedDesc:
  //       return "yes, descending";
  //     default:
  //       return "no";
  //   }

  return array.every(
    (_, index) => index == 0 || array[index] >= array[index - 1]
  )
    ? "yes, ascending"
    : array.every((_, index) => index == 0 || array[index] <= array[index - 1])
    ? "yes, descending"
    : "no";
}

console.log(isSortedAndHow([1, 2]));
console.log(isSortedAndHow([15, 7, 3, -8]));
console.log(isSortedAndHow([4, 2, 30]));
