// Codewars Challenge 2024
// 159/366
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s) {
  const lowercase = s.split("").filter((s) => s > s.toUpperCase());
  const uppercase = s.split("").filter((s) => s < s.toLowerCase());

  //   if (lowercase.length >= uppercase.length) {
  //     return s.toLowerCase();
  //   } else {
  //     return s.toUpperCase();
  //   }
  return lowercase.length >= uppercase.length
    ? s.toLowerCase()
    : s.toUpperCase();
}

console.log(solve("code"));
console.log(solve("CODe"));
console.log(solve("COde"));
console.log(solve("Code"));
