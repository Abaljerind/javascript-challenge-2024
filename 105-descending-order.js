// Codewars Challenge 2024
// 105/366
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {
  return +n.toString().split("").sort().reverse().join("");
}

console.log(descendingOrder(123456789));
console.log(descendingOrder(1021));
console.log(descendingOrder(15));
console.log(descendingOrder(111));
