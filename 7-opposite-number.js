// Codewars Challenge 2024
// 7/366
// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

// function opposite(number) {
//   if (number) {
//     return -number;
//   } else if (number <= 0) {
//     return number;
//   } else {
//     return 0;
//   }

//  // return number ? -number : number;

// }
const opposite = (number) => (number ? -number : number);

console.log(opposite(-2));
