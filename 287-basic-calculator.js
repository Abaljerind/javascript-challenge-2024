// Codewars Challenge 2024
// 287/366
// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript

/*

Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).

*/

function calculate(num1, operation, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      if (num2 === 0) return null;
      return num1 / num2;
      break;
    default:
      return null;
      break;
  }
}

console.log(calculate(3.2, "+", 8));
console.log(calculate(3.2, "-", 8));
console.log(calculate(3.2, "/", 8));
console.log(calculate(8, "m", 2));
console.log(calculate(3, "/", 0));
console.log(calculate(0, "/", 1));
