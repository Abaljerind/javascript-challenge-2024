// Codewars Challenge 2024
// 87/366
// https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

String.prototype.toAlternatingCase = function () {
  //   let newStr = "";
  //   for (const char of this) {
  //     if (char === char.toUpperCase()) {
  //       newStr += char.toLowerCase();
  //     } else {
  //       newStr += char.toUpperCase();
  //     }
  //   }
  //   return newStr;
  return this.split("")
    .map((item) => {
      return item === item.toUpperCase()
        ? item.toLowerCase()
        : item.toUpperCase();
    })
    .join("");
};

console.log("hello world".toAlternatingCase());
console.log("HELLO WORLD".toAlternatingCase());
console.log("HeLLo WoRLD".toAlternatingCase());
console.log("1a2b3c4d5e".toAlternatingCase());
