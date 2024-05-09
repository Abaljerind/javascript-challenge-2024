// Codewars Challenge 2024
// 82/366
// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

function correct(string) {
  //   return string.replaceAll(/5|0|1/gi, function (x) {
  //     if (x == "5") {
  //       return "S";
  //     } else if (x == "0") {
  //       return "O";
  //     } else if (x == "1") {
  //       return "I";
  //     }
  //   });

  //   return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

  s = string.split("");
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "5") s[i] = "S";
    else if (s[i] === "0") s[i] = "O";
    else if (s[i] === "1") s[i] = "I";
  }
  return s.join("");
}

console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("51NGAP0RE"));
console.log(correct("BUDAPE5T"));
