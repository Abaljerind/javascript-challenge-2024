// Codewars Challenge 2024
// 90/366
// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

function sumStr(a, b) {
  //   if (a == "" && b == "") {
  //     return "0";
  //   } else if (a == "" || b == "") {
  //     return a + b;
  //   }

  //   let total = parseInt(a) + parseInt(b);
  //   return total.toString();

  //   return String(Number(a) + Number(b));
  return String(+a + +b);
}

console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));
console.log(sumStr("", ""));
console.log(sumStr("2", ""));
console.log(sumStr("", "9"));
