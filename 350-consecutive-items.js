// Codewars Challenge 2024
// 350/366
// https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript

/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

pseudocode:
Masalah: mencari apakah nilai a dan b ada didalam array secara berurutan

mulai
    posA <- mengembalikan posisi nilai A 
    posB <- mengembalikan posisi nilai B 

    cek apakah posA dan posB berurutan didalam arr
selesai
*/

function consecutive(arr, a, b) {
  const posA = arr.indexOf(a);
  const posB = arr.indexOf(b);

  // cek apakah jarak index posA dan posB adalah 1
  return Math.abs(posA - posB) === 1;
}

console.log(consecutive([1, 3, 5, 7], 3, 7));
console.log(consecutive([1, 3, 5, 7], 3, 1));
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4));
