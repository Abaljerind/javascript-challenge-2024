// Codewars Challenge 2024
// 14/366
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(sheep) {
  //   return sheep.filter(Boolean).length;
  return sheep.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue === true ? 1 : 0);
  });
}
const arr = [true, undefined, true, false, true, false, undefined];
console.log(countSheeps(arr));
