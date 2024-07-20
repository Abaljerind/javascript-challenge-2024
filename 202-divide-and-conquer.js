// Codewars Challenge 2024
// 202/366
// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

function divCon(x) {
  //   return (
  //     x
  //       .filter((item) => (typeof item === "number" ? item : false))
  //       .reduce((acc, curr) => acc + curr, 0) -
  //     x
  //       .filter((item) => typeof item === "string")
  //       .map((item) => +item)
  //       .reduce((acc, curr) => acc + curr, 0)
  //   );

  return x.reduce(
    (acc, curr) => (typeof curr === "number" ? acc + curr : acc - Number(curr)),
    0
  );
}

console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
