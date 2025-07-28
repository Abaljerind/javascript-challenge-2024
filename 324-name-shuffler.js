// Codewars Challenge 2024
// 324/366
// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler("john McClane"));
console.log(nameShuffler("Mary jeggins"));
console.log(nameShuffler("tom jerry"));
