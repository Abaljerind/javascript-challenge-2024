// Codewars Challenge 2024
// 167/366
// https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript

function solution(digits) {
  //   return +digits
  //     .split("")
  //     .splice(Math.max(digits.length - 5, 1))
  //     .join("");

  let maxNumbers = 0;
  for (let i = 0; i <= digits.length - 5; i++) {
    let currentNumbers = parseInt(digits.substring(i, i + 5), 10);
    if (currentNumbers > maxNumbers) {
      maxNumbers = currentNumbers;
    }
  }
  return maxNumbers;
}

console.log(solution("1234567898765"));
console.log(solution("731674765"));
console.log(solution("1234567890"));
