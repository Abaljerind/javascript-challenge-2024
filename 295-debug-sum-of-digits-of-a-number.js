// Codewars Challenge 2024
// 295/366
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

/*
Debug function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.
Example

123  => 6
223  => 7
1337 => 14


*/

function getSumOfDigits(integer) {
  return integer
    .toString()
    .split("")
    .reduce((acc, curr) => +acc + +curr, 0);
}

console.log(getSumOfDigits(123));
console.log(getSumOfDigits(233));
console.log(getSumOfDigits(223));
console.log(getSumOfDigits(0));
