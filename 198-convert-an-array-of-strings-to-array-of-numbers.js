// Codewars Challenge 2024
// 198/366
// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

function toNumberArray(stringarray) {
  //   return stringarray.map((item) => +item);
  return stringarray.map(Number);
}

console.log(toNumberArray(["1.1", "2.2", "3.3"]));
