// Codewars Challenge 2024
// 354/366
// https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/javascript

/*
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true
Note - there will be no punctuation or digits in the input string, only letters.

*/

function validSpacing(s) {
  // if (s.length === 0) return true;
  // if (s === " ") return false;
  // if (s[0] === " ") return false;
  // if (s[s.length - 1] === " ") return false;
  // if (s.includes("  ")) return false;
  // return true;

  return s.trim() === s && !s.includes("  ");
}

console.log(validSpacing("Hello world"));
console.log(validSpacing("Hello  world "));
console.log(validSpacing("Hello"));
console.log(validSpacing(" Hello world"));
console.log(validSpacing("Helloworld "));
console.log(validSpacing(""));
console.log(validSpacing(" "));
