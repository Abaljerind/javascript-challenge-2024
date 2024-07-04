// Codewars Challenge 2024
// 173/366
// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
  if (a1.length == 0 || a2.length == 0) {
    return -1;
  }

  let min_length_a1 = Math.min(...a1.map((item) => item.length));
  let max_length_a1 = Math.max(...a1.map((item) => item.length));

  let min_length_a2 = Math.min(...a2.map((item) => item.length));
  let max_length_a2 = Math.max(...a2.map((item) => item.length));

  return max_length_a1 - min_length_a2 > max_length_a2 - min_length_a1
    ? max_length_a1 - min_length_a2
    : max_length_a2 - min_length_a1;
}

const s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2));
