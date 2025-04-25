// Codewars Challenge 2024
// 273/366
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript

// TODO -> Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number) {
  const newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}

console.log(createArray(1));
