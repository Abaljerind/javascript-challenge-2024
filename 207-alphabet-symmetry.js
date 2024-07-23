// Codewars Challenge 2024
// 207/366
// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

function solve(words) {
  //   // Helper function to calculate the number of correct positions
  //   const countCorrectPositions = (word) => {
  //     let count = 0;
  //     for (let i = 0; i < word.length; i++) {
  //       if (word[i].toLowerCase().charCodeAt(0) - 96 === i + 1) {
  //         count++;
  //       }
  //     }
  //     return count;
  //   };

  //   // Map through the array of words and apply the helper function to each word
  //   return words.map(countCorrectPositions);

  const alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return words.map(
    (abjad) =>
      abjad
        .toLowerCase()
        .split("")
        .filter((word, index) => index == alphabeth.indexOf(word)).length
  );
}

// Example usage
console.log(solve(["abode", "ABc", "xyzD"]));
console.log(solve(["abide", "ABc", "xyz"]));
