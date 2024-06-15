// Codewars Challenge 2024
// 140/366
// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n) {
  let total = 0;

  if (n % Math.sqrt(n) === 0) {
    total++;
  }

  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      total += 2;
    }
  }
  return total;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
