// Codewars Challenge 2024
// 240/366
// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

function removeRotten(bagOfFruits) {
  //   if (!Array.isArray(bagOfFruits) || bagOfFruits.includes(null) || bagOfFruits.length < 1) return [];
  //   return bagOfFruits.map((item) => item.replace(/rotten/g, "").toLowerCase());

  return bagOfFruits
    ? bagOfFruits.map((fruit) => fruit.replace(/rotten/g, "").toLowerCase())
    : [];
}

console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"]));
console.log(removeRotten([]));
console.log(removeRotten(["apple", "rottenBanana", "apple"]));
