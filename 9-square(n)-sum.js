// Codewars Challenge 2024
// 9/366
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
  //   let result = 0;
  //   for (i = 0; i < numbers.length; i++) {
  //     result += Math.pow(numbers[i], 2);
  //   }

  //   return result;

  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + Math.pow(currentValue, 2);
  }, 0);
}

console.log(squareSum([0, 3, 4, 5]));
