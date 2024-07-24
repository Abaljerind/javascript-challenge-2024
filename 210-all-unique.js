// Codewars Challenge 2024
// 210/366
// https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript

const hasUniqueChars = (str) => new Set(str).size == str.length;

console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars("abcdef"));
console.log(hasUniqueChars("aA"));
