// Codewars Challenge 2024
// 163/366
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

function capitalize(s) {
  const strEven = s
    .split("")
    .map((item, index) => {
      if (index % 2 == 0) {
        return item.toUpperCase();
      } else {
        return item.toLowerCase();
      }
    })
    .join("");
  const strOdd = s
    .split("")
    .map((item, index) => {
      if (index % 2 == 1) {
        return item.toUpperCase();
      } else {
        return item.toLowerCase();
      }
    })
    .join("");
  return [strEven, strOdd];
}

console.log(capitalize("abcdef"));
console.log(capitalize("codewars"));
console.log(capitalize("abracadabra"));
console.log(capitalize("codewarriors"));
