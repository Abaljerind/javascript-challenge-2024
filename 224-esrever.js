// Codewars Challenge 2024
// 224/366
// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

function reverse(array) {
  //   return array.reverse();
  const newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

console.log(reverse([1, 2, 3]));
console.log(reverse([1, null, 14, "two"]));
