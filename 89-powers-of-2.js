// Codewars Challenge 2024
// 89/366
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n) {
  const total = [];
  for (let i = 0; i <= n; i++) {
    total.push(Math.pow(2, i));
  }
  return total;

  //   return [...Array(n + 1)].map((_, index) => {
  //     return 2 ** index;
  //   });
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(4));
