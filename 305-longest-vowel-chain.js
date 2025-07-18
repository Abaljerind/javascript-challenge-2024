// Codewars Challenge 2024
// 305/366
// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/

function solve(s) {
  let maxLength = 0;
  let currentLength = 0;

  const vowels = "aiueo";
  const arrayS = s.split("");

  for (let i = 0; i < arrayS.length; i++) {
    if (vowels.includes(arrayS[i])) {
      currentLength++;

      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    } else {
      currentLength = 0;
    }
  }

  return maxLength;
}

console.log(solve("codewarriors"));
console.log(solve("suoidea"));
console.log(solve("ultrarevolutionariees"));
