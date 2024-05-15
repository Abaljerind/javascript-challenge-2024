// Codewars Challenge 2024
// 86/366
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
  //   const reversedX = x.split("").reverse().join("");
  //   return x.toLowerCase() == reversedX.toLowerCase();

  return x.toLowerCase().split("").reverse().join("") == x.toLowerCase();
}

console.log(isPalindrome("aba"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("Aba"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Bob"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("AbBa"));
