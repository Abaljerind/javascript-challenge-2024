// Codewars Challenge 2024
// 15/366
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
    default:
      return "you need to input the operator!";
      break;
  }
}

console.log(basicOp("/", 4, 7));
