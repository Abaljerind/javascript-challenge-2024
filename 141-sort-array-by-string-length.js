// Codewars Challenge 2024
// 141/366
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

function sortByLength(array) {
  //   Return an array containing the same strings,
  //   ordered from shortest to longest
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));
