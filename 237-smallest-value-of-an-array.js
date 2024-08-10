// Codewars Challenge 2024
// 237/366
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

// tujuan => mengembalikan nilai terkecil dari sebuah array atau index dari nilai tersebut
function min(arr, toReturn) {
  // cari nilai terendah dari arr
  let minValue = Math.min(...arr);

  if (toReturn === "value") return minValue;
  if (toReturn === "index") return arr.indexOf(minValue);
}

console.log(min([1, 2, 3, 4, 5], "value"));
console.log(min([1, 2, 3, 4, 5], "index"));
