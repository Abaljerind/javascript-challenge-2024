// Codewars Challenge 2024
// 352/366
// https://www.codewars.com/kata/5939ab6eed348a945f0007b2/train/javascript

/*
Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"

*/

function longestWord(stringOfWords) {
  //   const words = stringOfWords.split(" ");
  //   const maxLength = Math.max(...words.map((w) => w.length));

  //   return words.filter((word) => word.length === maxLength).pop();

  return stringOfWords
    .split(" ")
    .sort((b, a) => b.length - a.length)
    .pop();
}

console.log(longestWord("lonely"));
console.log(longestWord("a pair"));
console.log(longestWord("a b c d e fgh"));
console.log(longestWord("lonely nomore"));
