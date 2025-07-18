// Codewars Challenge 2024
// 303/366
// https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript

/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5); // should return "Value is 00005"
*/

function solution(value) {
  return value.toString().length != 5 ? `Value is ${value.toString().padStart(5, "0")}` : `Value is ${value}`;
}

console.log(solution(5));
console.log(solution(1204));
console.log(solution(109));
console.log(solution(0));
