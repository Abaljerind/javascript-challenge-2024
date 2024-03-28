// Codewars Challenge 2024
// 10/366
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr(n, s) {
  //   let str = "";
  //   for (let i = 1; i <= n; i++) {
  //     str += s;
  //   }
  //   return str;

  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  try {
    if (!n === "number") {
      throw new ValidationError("argumen pertama bukan angka!");
      return;
    } else if (n === "") {
      throw new ValidationError("argumen pertama tidak menerima string");
      return;
    }

    return s.repeat(n);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return `Syntax error terjadi karena: ${error.message}`;
    } else if (error instanceof ValidationError) {
      return `Validation error terjadi karena: ${error.message}`;
    } else {
      return error.message;
    }
  }
}

console.log(repeatStr("", "*"));
