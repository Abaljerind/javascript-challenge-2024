// Codewars Challenge 2024
// 69/366
// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

function setAlarm(employed, vacation) {
  return employed > vacation;
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, false));
