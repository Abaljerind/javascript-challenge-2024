// Codewars Challenge 2024
// 65/366
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

const quarterOf = (month) => {
  //   if (month == 1 || month == 2 || month == 3) {
  //     return 1;
  //   } else if (month == 4 || month == 5 || month == 6) {
  //     return 2;
  //   } else if (month == 7 || month == 8 || month == 9) {
  //     return 3;
  //   } else {
  //     return 4;
  //   }

  //   if (month >= 1 && month <= 3) {
  //     return 1;
  //   } else if (month >= 3 && month <= 6) {
  //     return 2;
  //   } else if (month >= 6 && month <= 9) {
  //     return 3;
  //   } else {
  //     return 4;
  //   }

  return Math.ceil(month / 3);
};

console.log(quarterOf(1));
console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));
