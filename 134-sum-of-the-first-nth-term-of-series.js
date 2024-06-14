// Codewars Challenge 2024
// 134/366
// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n) {
  //   if (n / 1 == 1) return (n / 1).toFixed(2);
  //   if (n / 2 == 1) return (n / 2 + 1 / 4).toFixed(2);
  //   if (n / 3 == 1) return (n / 3 + 1 / 4 + 1 / 7).toFixed(2);
  //   if (n / 4 == 1) return (n / 4 + 1 / 4 + 1 / 7 + 1 / 10).toFixed(2);
  if (n == 0) return n.toFixed(2);

  let sum = 0;
  let denominator = 1;

  for (let i = 0; i < n; i++) {
    sum += 1 / denominator;
    denominator += 3;
  }

  return sum.toFixed(2);
}

console.log(SeriesSum(0));
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
