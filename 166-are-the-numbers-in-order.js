// Codewars Challenge 2024
// 166/366
// https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

function inAscOrder(arr) {
  // buat ulang arr menjadi variable baru
  // const newArr = arr.slice();

  //   arr di urutkan. pada [...arr] adalah pengganti dari kode diatas
  //   const arraySort = [...arr].sort((a, b) => a - b);

  //   isi dari arr dan arraySort dibandingkan
  //   return arr.every((item, index) => item == arraySort[index]);

  return arr.join("") === arr.sort((a, b) => a - b).join("");
}

console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([1, 2, 3, 4, 5]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]));
