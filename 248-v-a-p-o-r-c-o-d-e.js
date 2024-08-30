// Codewars Challenge 2024
// 248/366
// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

function vaporcode(string) {
  return string.split(" ").join("").split("").join("  ").toUpperCase();
}

console.log(vaporcode("Lets go to the movies"));
console.log(vaporcode("Why isnt my code working"));
