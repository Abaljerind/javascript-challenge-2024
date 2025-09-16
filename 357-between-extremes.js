// Codewars Challenge 2024
// 357/366
// https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript

/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

mulai
urutkan nilai dari yang terkecil ke terbesar
kembalikan dengan function mutlak hasil pengurangan dari item terakhir di dalam array dan item pertama di dalam array
selesai
*/

function betweenExtremes(numbers) {
  //   const sortNum = numbers.sort((a, b) => a - b);
  //   return Math.abs(sortNum.slice(-1) - sortNum[0]);

  return Math.max(...numbers) - Math.min(...numbers);
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));
console.log(betweenExtremes([-1, -41, -77, -100]));
