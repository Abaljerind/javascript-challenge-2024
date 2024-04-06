// Codewars Challenge 2024
// 30/366
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// Sum Numbers
function sum(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}
const num = [1, 5.2, 4, 0, -1];

console.log(sum(num));
