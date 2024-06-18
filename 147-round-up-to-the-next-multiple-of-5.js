// Codewars Challenge 2024
// 147/366
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

/*
TODO:: Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

input:    output:
0    ->   0
2    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
*/
function roundToNext5(n) {
  //   if (n % 5 === 0) {
  //     return n;
  //   }
  return Math.ceil(n / 5) * 5;
}

console.log(roundToNext5(0));
console.log(roundToNext5(2));
console.log(roundToNext5(8));
console.log(roundToNext5(12));
console.log(roundToNext5(30));
console.log(roundToNext5(-2));
console.log(roundToNext5(-5));
