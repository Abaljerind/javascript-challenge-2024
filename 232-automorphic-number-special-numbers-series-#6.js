// Codewars Challenge 2024
// 232/366
// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

function automorphic(n) {
  let square = (n * n).toString();
  n = n.toString();
  return square.endsWith(n) ? "Automorphic" : "Not!!";
}

console.log(automorphic(1));
console.log(automorphic(3));
console.log(automorphic(6));
console.log(automorphic(9));
console.log(automorphic(25));
console.log(automorphic(376));
