// Codewars Challenge 2024
// 199/366
// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

function generateShape(integer) {
  //   let shape = "";
  //   for (let i = 0; i < integer; i++) {
  //     for (let j = 0; j < integer; j++) {
  //       shape += "+";
  //     }
  //     if (i < integer - 1) shape += "\n";
  //   }
  //   return shape;

  return ("+".repeat(integer) + "\n").repeat(integer).trim();
}

console.log(generateShape(3));
console.log(generateShape(8));
