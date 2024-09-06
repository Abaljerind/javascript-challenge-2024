// Codewars Challenge 2024
// 256/366
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
  // return (n - 1) % 9 + 1
  return n < 10
    ? n
    : digitalRoot(
        n
          .toString()
          .split("")
          .reduce((acc, digit) => acc + parseInt(digit), 0)
      );
}

console.log(digitalRoot(16));
console.log(digitalRoot(456));
