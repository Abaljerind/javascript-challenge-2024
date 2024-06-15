// Codewars Challenge 2024
// 138/366
// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

/*
TODO:: return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
 */
function dontGiveMeFive(start, end) {
  let total = 0;
  for (i = start; i <= end; i++) {
    if (i.toString().includes("5") == false) {
      total++;
    }
  }
  return total;
}

console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
