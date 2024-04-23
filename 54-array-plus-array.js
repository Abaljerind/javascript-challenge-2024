// Codewars Challenge 2024
// 54/366
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
  //   return (
  //     arr1.reduce((accumulator, currentValue) => {
  //       return accumulator + currentValue;
  //     }) +
  //     arr2.reduce((accumulator, currentValue) => {
  //       return accumulator + currentValue;
  //     })
  //   );

  return [...arr1, ...arr2].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  //   let result = 0;
  //   for (const i of arr1) {
  //     result += i;
  //   }

  //   for (const j of arr2) {
  //     result += j;
  //   }
  //   return result;

  //   let result = 0;
  //   arr1.map((item) => {
  //     result += item;
  //   });

  //   arr2.map((item) => {
  //     result += item;
  //   });
  //   return result;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
