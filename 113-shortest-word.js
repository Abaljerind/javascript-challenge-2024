// Codewars Challenge 2024
// 113/366
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  s = s
    .split(" ")
    .map((item) => {
      return item.length;
    })
    .sort((a, b) => a - b);

  return s[0];

  // return Math.min(...s.split(' ').map(s => s.length))
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort("Let's travel abroad shall we"));
