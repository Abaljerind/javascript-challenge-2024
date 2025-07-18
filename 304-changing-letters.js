// Codewars Challenge 2024
// 304/366
// https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript

/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/

function swap(string) {
  if (string.length === 0) return "";

  //   return string.replace(/[a]/g, "A").replace(/[e]/g, "E").replace(/[i]/g, "I").replace(/[u]/g, "U").replace(/[o]/g, "O");
  return string.replace(/[aiueo]/, (v) => v.toUpperCase());
}

console.log(swap(""));
console.log(swap("   @@@"));
console.log(swap("HelloWorld!"));
console.log(swap("Sunday"));
