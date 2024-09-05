// Codewars Challenge 2024
// 254/366
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  //   const count = {}; // objek untuk menyimpan jumlah kemunculan elemen

  //   // Iterasi untuk menghitung frekuensi setiap elemen
  //   for (let i = 0; i < A.length; i++) {
  //     const num = A[i];
  //     count[num] = (count[num] || 0) + 1;
  //   }

  //   // Cari elemen yang muncul dalam jumlah ganjil
  //   for (const key in count) {
  //     if (count[key] % 2 !== 0) {
  //       return +key;
  //     }
  //   }

  return A.reduce((acc, curr) => acc ^ curr);

  /* 
  Operator XOR (^): Operator XOR adalah operasi bitwise yang mengembalikan 1 untuk setiap bit yang berbeda antara dua bilangan biner dan mengembalikan 0 untuk setiap bit yang sama.
  Misalnya, 5 (0101) XOR 3 (0011) akan menghasilkan 6 (0110).

  Misalkan array [1, 1, 2]:

    Iterasi pertama: acc = 0 ^ 1 = 1
    Iterasi kedua: acc = 1 ^ 1 = 0 (dua angka 1 saling membatalkan)
    Iterasi ketiga: acc = 0 ^ 2 = 2

    Hasil akhir adalah 2, yang muncul dalam jumlah ganjil.
   */
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
