// Codewars Challenge 2024
// 62/366
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
  //   return s.split("!").join("");
}

console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks("Hello!!!!!!!"));
