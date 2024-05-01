// Codewars Challenge 2024
// 67/366
// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

function doubleChar(str) {
  return str
    .split("")
    .map((word) => {
      return word + word;
    })
    .join("");
}

console.log(doubleChar("abcd"));
console.log(doubleChar("1337"));
console.log(doubleChar("illuminati"));
console.log(doubleChar("123456"));
console.log(doubleChar("%^&*("));
console.log(doubleChar("1234!_ "));
