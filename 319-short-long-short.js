// Codewars Challenge 2024
// 319/366
// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/

function solution(a, b) {
  //   return Math.max(a.length, b.length)
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}

console.log(solution("45", "1"));
console.log(solution("13", "200"));
console.log(solution("Soon", "Me"));
