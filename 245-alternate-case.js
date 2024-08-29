// Codewars Challenge 2024
// 245/366
// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

function alternateCase(s) {
  //   return s.replace(/./g, function (char) {
  //     return char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  //   });

  return s
    .split("")
    .map((char) =>
      char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

console.log(alternateCase("abc"));
console.log(alternateCase("ABC"));
console.log(alternateCase("Hello World"));
