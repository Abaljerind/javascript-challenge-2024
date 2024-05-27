// Codewars Challenge 2024
// 108/366
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  return s
    .split("")
    .map((item, index) => {
      return item.toUpperCase() + item.toLowerCase().repeat(index);
    })
    .join("-");
}

console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
console.log(accum("EvidjUnokmM"));
