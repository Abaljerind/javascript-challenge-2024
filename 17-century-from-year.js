// Codewars Challenge 2024
// 17/366
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
  // prototype still wrong
  //   let century = 0;
  //   for (let i = 0; i <= year; i++) {
  //     if (year % 100 === 0) {
  //       return year.toString().slice(0, 2);
  //     } else {
  //       century = i.toString().slice(0, 2);
  //       parseInt(century++);
  //     }
  //   }
  //   return parseInt(century);

  if (year.toString().length < 3) return 1;
  // +year used to turn year back to Int
  const c = +year.toString().slice(0, -2);
  if (year % 100 === 0) return c;
  return c + 1;
}

console.log(century(2001));
