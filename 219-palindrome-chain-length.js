// Codewars Challenge 2024
// 219/366
// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

function palindromeChainLength(n) {
  let steps = 0;
  while (!isPalindrome(n)) {
    n += +n.toString().split("").reverse().join("");
    steps += 1;
  }
  return steps;
}

// isPalindrome untuk cek apakah nilai awal dan nilai yang di reverse bernilai sama
function isPalindrome(num) {
  return num.toString() == +num.toString().split("").reverse().join("");
}
console.log(isPalindrome(88));

console.log(palindromeChainLength(1));
console.log(palindromeChainLength(88));
console.log(palindromeChainLength(87));
console.log(palindromeChainLength(10));
