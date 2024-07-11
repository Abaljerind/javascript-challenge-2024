// Codewars Challenge 2024
// 185/366
// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

function adjacentElementsProduct(array) {
  //   let product_max = array[0] * array[1];

  //   for (let i = 0; i < array.length - 1; i++) {
  //     let product = array[i] * array[i + 1];
  //     if (product > product_max) {
  //       product_max = product;
  //     }
  //   }
  //   return product_max;

  let newArr = [];
  for (i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArr);
}

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 5, 10, 9]));
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]));
