// Codewars Challenge 2024
// 85/366
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

const humanYearsCatYearsDogYears = function (humanYears) {
  //   const years = [];
  //   if (humanYears == 1) {
  //     years.push(humanYears);
  //     years.push(humanYears * 15);
  //     years.push(humanYears * 15);
  //   } else if (humanYears == 2) {
  //     years.push(humanYears);
  //     years.push(15 + 9);
  //     years.push(15 + 9);
  //   } else if (humanYears > 2) {
  //     years.push(humanYears);
  //     years.push((humanYears - 2) * 4 + 15 + 9);
  //     years.push((humanYears - 2) * 5 + 15 + 9);
  //   }

  //   return years;

  if (humanYears == 1) return [1, 15, 15];
  if (humanYears == 2) return [2, 24, 24];
  return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
console.log(humanYearsCatYearsDogYears(12));
console.log(humanYearsCatYearsDogYears(4));
