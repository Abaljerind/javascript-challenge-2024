// Codewars Challenge 2024
// 279/366
// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
 */

function capitalize(s, arr) {
  const arrStr = s.split("");
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[arr[i]]) {
      arrStr[arr[i]] = arrStr[arr[i]].toUpperCase();
    }
  }
  return arrStr.join("");
}

console.log(capitalize("abcdef", [1, 2, 5]));
console.log(capitalize("abcdef", [1, 2, 5, 100]));
console.log(capitalize("codewars", [1, 3, 5, 50]));
