// Codewars Challenge 2024
// 70/366
// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  //   if (bonus) {
  //     return `\u00A3${salary * 10}`;
  //   } else {
  //     return `\u00A3${salary}`;
  //   }

  return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`;
}

console.log(bonusTime(10000, true));
console.log(bonusTime(25000, true));
console.log(bonusTime(10000, false));
console.log(bonusTime(60000, false));
