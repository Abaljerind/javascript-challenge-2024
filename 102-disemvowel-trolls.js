// Codewars Challenge 2024
// 102/366
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  //   return str.replaceAll(/[aiueoAIUEO]/g, "");
  return str.replaceAll(/[aiueo]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("Your writing is among the worst I've ever read"));
console.log(disemvowel("What are you, a shit?"));
