// Codewars Challenge 2024
// 60/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));
