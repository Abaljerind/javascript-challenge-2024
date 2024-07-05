// Codewars Challenge 2024
// 176/366
// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

function wordsToMarks(string) {
  let total = 0;

  for (let i = 0; i < string.length; i++) {
    let letterValue = string.charCodeAt(i) - "a".charCodeAt(0) + 1;
    total += letterValue;
  }

  return total;
}

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
