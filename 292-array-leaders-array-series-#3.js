// Codewars Challenge 2024
// 292/366
// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript

/*
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).

arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side

2 is greater than the sum all the elements to its right side

Note : The last element -1 is less than the sum of its right elements (abstract zero).

arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side

-1 is greater than the sum all the elements to its right side

3 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).
 */

function arrayLeaders(numbers) {
  const arrLeaders = [];

  for (let i = 0; i < numbers.length; i++) {
    // Hitung jumlah semua elemen setelah index i
    let rightSum = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      rightSum += numbers[j];
    }

    // Bandingkan apakah numbers[i] lebih besar dari rightSum
    if (numbers[i] > rightSum) {
      arrLeaders.push(numbers[i]);
    }
  }

  return arrLeaders;
}

console.log(arrayLeaders([1, 2, 3, 4, 0]));
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));
console.log(arrayLeaders([-1, -29, -26, -2]));
console.log(arrayLeaders([5, -2, 2]));
