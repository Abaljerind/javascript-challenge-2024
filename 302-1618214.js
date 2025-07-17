// Codewars Challenge 2024
// 302/366
// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

function add(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  // Pad with zeros on the left to make same length
  while (strNum1.length < strNum2.length) strNum1 = "0" + strNum1;
  while (strNum2.length < strNum1.length) strNum2 = "0" + strNum2;

  let result = "";
  for (let i = 0; i < strNum1.length; i++) {
    let sum = Number(strNum1[i]) + Number(strNum2[i]);
    result += sum.toString();
  }

  return Number(result);
}

console.log(add(2, 11));
console.log(add(0, 1));
console.log(add(16, 18));
console.log(add(1222, 30277));
