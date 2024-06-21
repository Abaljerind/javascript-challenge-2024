// Codewars Challenge 2024
// 157/366
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

function reverseLetter(str) {
  //coding and coding..
  let processed = str.replace(/[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, "");

  return processed.replace(/ /g, "").split("").reverse().join("");
}

console.log(reverseLetter("krishan"));
console.log(reverseLetter("ultr53o?n"));
console.log(reverseLetter("ab23c"));
console.log(reverseLetter("krish21an"));
