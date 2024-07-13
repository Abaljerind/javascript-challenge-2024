// Codewars Challenge 2024
// 193/366
// https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript

function isPowerOfTwo(n) {
  //   if (n === 0) return false;
  //   return (n & (n - 1)) === 0;
  return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(5));
