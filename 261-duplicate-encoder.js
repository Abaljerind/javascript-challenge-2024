// Codewars Challenge 2024
// 261/366
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
  const wordLowerCase = word.toLowerCase().split("");

  let frekuensi = {};

  for (let char of wordLowerCase) {
    if (frekuensi[char]) {
      frekuensi[char]++;
    } else {
      frekuensi[char] = 1;
    }
  }

  let output = "";
  for (let char of wordLowerCase) {
    if (frekuensi[char] > 1) {
      output += ")";
    } else {
      output += "(";
    }
  }

  return output;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
