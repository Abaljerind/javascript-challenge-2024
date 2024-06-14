// Codewars Challenge 2024
// 133/366
// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

function divisors(integer) {
  const res = [];
  for (var i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + " is prime";
}

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));
