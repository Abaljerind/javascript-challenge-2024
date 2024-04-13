// Codewars Challenge 2024
// 32/366
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  //   if (array.length === 0) {
  //     return 0;
  //   }
  //   return (
  //     array.reduce((accumulator, currentValue) => {
  //       return accumulator + currentValue;
  //     }) / array.length
  //   );

  return array.length === 0
    ? 0
    : array.reduce((a, b) => {
        return a + b;
      }) / array.length;
}

console.log(findAverage([1, 1, 1]));
