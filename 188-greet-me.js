// Codewars Challenge 2024
// 188/366
// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

function greet(name) {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
}

console.log(greet("RiLEy"));
console.log(greet("bro"));
