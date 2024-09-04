// Codewars Challenge 2024
// 252/366
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
  return string
    .split(" ")
    .map((item) => {
      return item.length >= 5 ? item.split("").reverse().join("") : item;
    })
    .join(" ");
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
