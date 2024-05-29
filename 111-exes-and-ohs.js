// Codewars Challenge 2024
// 111/366
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */
// function XO(str) {
//   str = str.split("");
//   return count(str, "x") === count(str, "o");
// }

// function count(str, letter) {
//   return str.reduce(
//     (accumulator, currentValue) =>
//       currentValue.toLowerCase() === letter ? accumulator + 1 : accumulator,
//     0
//   );
// }

function XO(str) {
  // let x = str.match(/x/gi);
  // let o = str.match(/o/gi);
  // return (x && x.length) === (o && o.length);

  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
}

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
