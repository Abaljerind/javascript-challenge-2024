// Codewars Challenge 2024
// 122/366
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
  const wrongStr = s.split("").filter((item) => {
    return (
      item == "n" ||
      item == "o" ||
      item == "p" ||
      item == "q" ||
      item == "r" ||
      item == "s" ||
      item == "t" ||
      item == "u" ||
      item == "v" ||
      item == "w" ||
      item == "x" ||
      item == "y" ||
      item == "z"
    );
  }).length;

  const trueStr = s.split("").filter((wrong) => {
    return wrong;
  }).length;

  return `${wrongStr}/${trueStr}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
