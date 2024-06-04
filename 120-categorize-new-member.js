// Codewars Challenge 2024
// 120/366
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data) {
  //   return data.map((item) => {
  //     if (item[0] >= 55 && item[1] > 7) {
  //       return "Senior";
  //     } else {
  //       return "Open";
  //     }
  //   });

  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
