// Codewars Challenge 2024
// 334/366
// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

/*
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

Notes
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.

Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number

jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1

jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1

jumpingNumber(556847) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1

jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1

jumpingNumber(89098) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1

jumpingNumber(32) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
*/

function jumpingNumber(n) {
  const digits = n.toString().split("").map(Number);
  for (let i = 1; i < digits.length; i++) {
    if (Math.abs(digits[i] - digits[i - 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}

console.log(jumpingNumber(1));
console.log(jumpingNumber(7));
console.log(jumpingNumber(23));
console.log(jumpingNumber(79));
console.log(jumpingNumber(89098));
console.log(jumpingNumber(2765));
console.log(jumpingNumber(3233));
console.log(jumpingNumber(52382));
