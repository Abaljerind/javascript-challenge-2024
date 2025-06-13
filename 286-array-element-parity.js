// Codewars Challenge 2024
// 286/366
// https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript

/*

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!

*/

// function solve(arr) {
//   // buat set dengan array dari arr, agar tidak ada duplikasi angka yang sama.
//   // Ex: [1, 1, 2, -2] kan 1 nya ada 2 berarti ada duplikasi, dengan Set maka 1 nya hanya ada 1.
//   const arrSet = new Set(arr);

//   // buat array kosong untuk menampung hasil iterasi dari arrSet yang tidak punya pasangan (positif & negatif)
//   const newArr = [];

//   // buat pengulangan dengan for of karena menggunakan Set
//   for (const el of arrSet) {
//     // kalau tidak ditemukan lawannya (el * -1 or -el) dalam set, simpan ke newArr
//     if (!arrSet.has(-el)) {
//       // masukkan angka (el) tersebut ke dalam newArr
//       newArr.push(el);
//     }
//   }

//   // kembalikan newArr menjadi number bukan array
//   return +newArr;
// }

function solve(arr) {
  // cara ez
  // return arr.find((el) => {
  //   return !arr.includes(-el);
  // });

  // ubah arr jadi set agar tidak ada duplikasi angka
  // karena new Set ada didalam [] maka otomatis jadi array lagi
  // dan karena tiap angka punya pasangan positif dan negatif nya, maka cukup dijumlahkan semua angkanya
  // hasilnya angka yang tidak punya pasangan yang akan muncul
  return [...new Set(arr)].reduce((acc, curr) => acc + curr);
}

console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));
