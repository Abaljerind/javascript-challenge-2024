// Codewars Challenge 2024
// 79/366
// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount(str, letter) {
  let countLetter = 0;
  for (let i of str) {
    if (i.includes(letter)) {
      countLetter += 1;
    }
  }
  return countLetter;
}

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));
