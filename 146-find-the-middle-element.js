// Codewars Challenge 2024
// 146/366
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

/*
TODO: you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

* For example:

? gimme([2, 3, 1]) => 0
? gimme([5, 10, 14]) => 1
*/

function gimme(triplet) {
  // copy triplet to another array and sort it
  //   return triplet.slice().sort((a, b) => a - b);
  const newTriplet = triplet.slice().sort((a, b) => a - b);

  //   find item position in the middle
  const position = newTriplet[1];

  //   return the index of middle item
  return triplet.indexOf(position);
}

console.log(gimme([2, 3, 1]));
console.log(gimme([-2, -3, -1]));
console.log(gimme([5, 10, 14]));
console.log(gimme([2.1, 3.2, 1.4]));
console.log(gimme([5.9, 10.4, 14.2]));
console.log(gimme([-5, -10, -14]));
