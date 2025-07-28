// Codewars Challenge 2024
// 325/366
// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

/*
Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0;
}

console.log(combat(100, 5));
console.log(combat(92, 8));
console.log(combat(20, 30));
