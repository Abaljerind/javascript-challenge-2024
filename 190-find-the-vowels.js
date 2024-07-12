// Codewars Challenge 2024
// 190/366
// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

function vowelIndices(word) {
  //   return word.split("").filter((item) => item);
  const vowel = [];
  const lowerCaseWord = word.toLowerCase();
  for (let i = 0; i < lowerCaseWord.length; i++) {
    // if (
    //   lowerCaseWord[i] == "a" ||
    //   lowerCaseWord[i] == "i" ||
    //   lowerCaseWord[i] == "u" ||
    //   lowerCaseWord[i] == "e" ||
    //   lowerCaseWord[i] == "o" ||
    //   lowerCaseWord[i] == "y"
    // )
    if (/[aiueoy]/i.test(word[i])) {
      vowel.push(i + 1);
    }
  }
  return vowel;
}

console.log(vowelIndices("mmm"));
console.log(vowelIndices("apple"));
console.log(vowelIndices("supercalifragilisticexpialidocious"));
console.log(vowelIndices("zLLQKgNAZrDZRcOxeEWsp"));
