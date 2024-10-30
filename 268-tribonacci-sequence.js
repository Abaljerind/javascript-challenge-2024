// Codewars Challenge 2024
// 268/366
// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

/*
So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

ALGORITMA:
    1. untuk membuat angka baru dan di push ke dalam array, perlu menambahkan 3 angka pertama didepan
    2. lalu digeser dari array 0 ke array 1 untuk menambahkan 3 angka selanjutnya setelah array 0
    3. n adalah jumlah panjang array nya
    4. kalau n == 0 kembalikan array kosong

PSEUDOCODE:
    1. kalau n == 0 kembalikan array kosong
    2. buat array baru dari signature
    3. lakukan pengulangan
    4. didalam pengulangan, kalau 

PSEUDOCODE dari ChatGPT:
    1. Inisialisasi Fungsi
    Buat fungsi bernama tribonacci yang menerima dua parameter:

    signature: array yang berisi 3 angka awal dari urutan Tribonacci.
    n: jumlah elemen yang diinginkan dari urutan Tribonacci.

    2. Kasus Khusus
    Jika n adalah 0, kembalikan array kosong.

    3. Periksa Panjang Awal
    Jika n kurang dari atau sama dengan 3, kembalikan signature.slice(0, n), karena kita hanya butuh elemen awalnya.

    4. Membuat Urutan Tribonacci
    Buat array baru result yang berisi elemen dari signature.

    5. Loop untuk Membentuk Urutan
    Buat loop dari indeks ke-3 hingga n - 1.
    Pada setiap iterasi, tambahkan tiga angka terakhir dari result untuk mendapatkan angka berikutnya dalam urutan.
    Tambahkan angka ini ke result.

    6. Kembalikan Hasil
    Setelah loop selesai, kembalikan array result sebagai output fungsi.
*/

function tribonacci(signature, n) {
  if (n === 0) return [];

  if (n <= 3) return signature.slice(0, n);

  let tribonacci = signature.slice();

  for (let i = 0; i < n - 3; i++) {
    tribonacci.push(tribonacci.slice(-3).reduce((acc, curr) => acc + curr, 0));
  }

  return tribonacci;
}

console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
console.log(tribonacci([0, 1, 1], 10));
console.log(tribonacci([1, 0, 0], 10));
console.log(tribonacci([1, 0, 0], 0));
