// Codewars Challenge 2024
// 329/366
// https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/javascript

/*
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
Examples

("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"

*/

function stringMerge(string1, string2, letter) {
  return (
    string1.slice(0, string1.indexOf(letter)) +
    string2.slice(string2.indexOf(letter))
  );
}

console.log(stringMerge("12345654321", "123456789", "6"));
console.log(stringMerge("hello", "world", "l"));
console.log(stringMerge("person", "here", "e"));
console.log(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j"));
console.log(stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x"));
