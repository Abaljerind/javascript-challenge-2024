// Codewars Challenge 2024
// 230/366
// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

function myLanguages(results) {
  //   let pairs = Object.entries(results);

  //   const filteredPairs = [];

  //   for (let [language, score] of pairs) {
  //     if (score >= 60) {
  //       filteredPairs.push([language, score]);
  //     }
  //   }

  //   return filteredPairs.sort((a, b) => b[1] - a[1]).map((pair) => pair[0]);

  return Object.keys(results)
    .filter((item) => results[item] >= 60)
    .sort((a, b) => results[b] - results[a]);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }));
