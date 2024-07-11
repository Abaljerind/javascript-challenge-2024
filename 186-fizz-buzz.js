// Codewars Challenge 2024
// 186/366
// https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

function fizzbuzz(n) {
  n = Array(n)
    .fill(0)
    .map((_, index) => index + 1);
  return n.map((item) =>
    item % 3 == 0 && item % 5 == 0
      ? "FizzBuzz"
      : item % 3 === 0
      ? "Fizz"
      : item % 5 === 0
      ? "Buzz"
      : item
  );
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(9));
console.log(fizzbuzz(10));
