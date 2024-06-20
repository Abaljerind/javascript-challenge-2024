// Codewars Challenge 2024
// 154/366
// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));
