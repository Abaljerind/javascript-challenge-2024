// Codewars Challenge 2024
// 208/366
// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

function filterString(value) {
  //   return +value
  //     .split("")
  //     .filter((item) => item >= 0)
  //     .join("");
  return +value.replace(/[^\d]/g, "");
}

console.log(filterString("123"));
console.log(filterString("a1b2c3"));
console.log(filterString("309k0z77sslt8i"));
