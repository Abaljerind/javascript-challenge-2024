// Codewars Challenge 2024
// 144/366
// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
  let total = "0";
  for (i = 0; i <= n; i++) {
    total += i ** 2;
  }
  return total.split(d).length - 1;
}

console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
console.log(nbDig(12224, 8));
console.log(nbDig(11549, 1));
