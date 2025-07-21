// Codewars Challenge 2024
// 307/366
// https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

/*
Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
Enjoy it!!
*/

Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((num) => !values_list.includes(num));
};

integer_list1 = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
values_list1 = [1, 3, 4, 2];

integer_list2 = [1, 1, 2, 3, 1, 2, 3, 4];
values_list2 = [1, 3];

console.log([].remove_(integer_list1, values_list1));
console.log([].remove_(integer_list2, values_list2));
