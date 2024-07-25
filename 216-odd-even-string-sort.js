// Codewars Challenge 2024
// 216/366
// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

function sortMyString(str) {
  //   return `${str
  //     .split("")
  //     .map((item) => item)
  //     .map((item, index) => (index % 2 === 0 ? item : ""))
  //     .join("")} ${str
  //     .split("")
  //     .map((item) => item)
  //     .map((item, index) => (index % 2 === 1 ? item : ""))
  //     .join("")}`;

  return `${str
    .split("")
    .filter((_, index) => index % 2 === 0)
    .join("")} ${str
    .split("")
    .filter((_, index) => index % 2 === 1)
    .join("")}`;
}

console.log(sortMyString("CodeWars"));
console.log(sortMyString("YCOLUE'VREER"));
