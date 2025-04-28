// Codewars Challenge 2024
// 274/366
// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

/*
Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes
The input array will always contain only positive numbers, and will never be empty or null.
 */

function squareOrSquareRoot(array) {
  return array.map((arr) => {
    const square = Math.sqrt(arr);

    // if (Number.isInteger(square)) return square;
    // return arr * arr;

    return Number.isInteger(square) ? square : arr ** 2;
  });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]));
console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6]));
