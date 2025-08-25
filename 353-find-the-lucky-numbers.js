// Codewars Challenge 2024
// 353/366
// https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript

/*
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

For example,

ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]
Don't worry about bad input, you will always receive a finite list of integers.

tips membuat pseudocode:

1. Pahami masalahnya dulu dengan jelas
   Sebelum nulis pseudocode, pastikan kamu ngerti apa yang mau diselesaikan. Baca soal atau problem statement dengan teliti.

2. Gunakan bahasa yang sederhana dan logis
   Pseudocode itu bukan bahasa pemrograman, jadi pakai kalimat yang gampang dimengerti, seperti “ambil data”, “cek kondisi”, “ulang sampai selesai”.

3. Pelajari struktur dasar algoritma
   Biasakan pakai struktur umum seperti:
    - Input (ambil data)
    - Proses (perhitungan, pengecekan)
    - Output (tampilkan hasil)
    - Pengulangan (loop)
    - Percabangan (if-else)

4. Buat langkah demi langkah, jangan sekaligus panjang
   Tuliskan proses utama satu per satu, supaya gak bingung.

5. Cek dan revisi pseudocode
   Setelah selesai, coba baca ulang dan bayangkan langkahnya dijalankan komputer. Kalau ada yang membingungkan, perbaiki.

Contoh:
mulai
input daftar angka
inialisasi nilai_terbesar dengan angka pertama
untuk setiap angka di daftar angka:
    jika angka > nilai_terbesar, maka nilai_terbesar = angka
output nilai_terbesar
selesai
*/

var filterLucky = (x) => {
  return x.filter((num) => num.toString().includes(7));
};

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
console.log(filterLucky([71, 9907, 69]));
