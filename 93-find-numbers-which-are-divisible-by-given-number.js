// Codewars Challenge 2024
// 93/366
// https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

function divisibleBy(numbers, divisor) {
  return numbers.filter((number) => {
    return number % divisor === 0;
  });
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4));
console.log(divisibleBy([0], 4));
console.log(divisibleBy([1, 3, 5], 2));
