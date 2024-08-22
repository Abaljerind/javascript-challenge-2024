// Codewars Challenge 2024
// 239/366
// https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript

function averages(numbers) {
  if (!Array.isArray(numbers) || numbers.length <= 1 || numbers.includes(null))
    return [];
  const result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    result.push((numbers[i] + numbers[i + 1]) / 2);
  }
  return result;
}

console.log(averages([2, 2, 2, 2, 2]));
console.log(averages([2, -2, 2, -2, 2]));
console.log(averages([1, 3, 5, 1, -10]));
