// Codewars Challenge 2024
// 265/366
// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str) {
  // method biasa
  //   return str.split(/-|_/g).map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('')

  // regex
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
  // Cari dash (-) atau underscore (_) yang diikuti oleh satu karakter, lalu capitalize karakter tersebut
}

console.log(toCamelCase(""));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
