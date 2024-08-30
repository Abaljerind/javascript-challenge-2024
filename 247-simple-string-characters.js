// Codewars Challenge 2024
// 247/366
// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

function solve(s) {
  //   const uppercaseLetters = s.split("").filter((char) => char == char.replace(/[^A-Z]/g, "")).length
  //   const lowercaseLetters = s.split("").filter((char) => char == char.replace(/[^a-z]/g, "")).length
  //   const numbers =  s.split("").filter((char) => char == char.replace(/[^0-9]/, "")).length
  //   const specialCharacters = s.split("").filter((char) => /[^a-zA-Z0-9]/.test(char)).length
  //   return [uppercaseLetters, lowercaseLetters, numbers, specialCharacters]

  const uppercaseLetters = s.match(/[A-Z]/g) || [];
  const lowercaseLetters = s.match(/[a-z]/g) || [];
  const numbers = s.match(/[0-9]/g) || [];
  const specialCharacters = s.match(/[^a-zA-Z0-9]/gi) || [];

  return [
    uppercaseLetters.length,
    lowercaseLetters.length,
    numbers.length,
    specialCharacters.length,
  ];
}

console.log(solve(""));
console.log(solve("aAbBcC"));
console.log(solve("Codewars@codewars123.com"));
console.log(solve("bgA5<1d-tOwUZTS8yQ"));
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));
