// Codewars Challenge 2024
// 112/366
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// function toJadenCase(str) {
//   return str
//     .split(" ")
//     .map((item) => {
//       return item[0].toUpperCase() + item.slice(1);
//     })
//     .join(" ");
// }

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log("How can mirrors be real".toJadenCase());
