// Codewars Challenge 2024
// 104/366
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  //   const numbersArray = numbers.split(" ").map((item) => {
  //     return +item;
  //   });
  //   const min = Math.min(...numbersArray);
  //   const max = Math.max(...numbersArray);
  //   return [max, min].join(" ");

  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));
console.log(highAndLow("1 2 -3 4 5"));
