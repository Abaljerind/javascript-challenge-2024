// Codewars Challenge 2024
// 2/366
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  //   if (num <= 0) {
  //     return num;
  //   } else if (num >= 0) {
  //     return -num;
  //   } else {
  //     return 0;
  //   }

  return num <= 0 ? num : -num;
}

console.log(makeNegative(0));
