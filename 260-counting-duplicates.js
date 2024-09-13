// Codewars Challenge 2024
// 260/366
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  if (text.length === 0) return 0;

  let lowerText = text.toLowerCase().split("");

  let counts = {};

  lowerText.forEach((char) => {
    if (counts[char]) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  });

  let duplicateCount = 0;
  for (let char in counts) {
    if (counts[char] > 1) {
      duplicateCount++;
    }
  }

  return duplicateCount;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("aA11"));
