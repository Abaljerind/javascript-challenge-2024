// Codewars Challenge 2024
// 171/366
// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2000));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
