// Codewars Challenge 2024
// 33/366
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
  //   return array.map((num) => {
  //     if (num > 0) {
  //       return -num;
  //     } else if (num < 0) {
  //       return -num;
  //     } else {
  //       return num;
  //     }
  //   });

  return array.map((num) => {
    return -num;
  });
}

console.log(invert([1, -2, 3, -4, 5]));
