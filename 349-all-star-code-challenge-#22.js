// Codewars Challenge 2024
// 349/366
// https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #22

Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"

For example:

3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"

pseudocode:
Masalah: nilai parameter yang berupa detik harus diubah ke jam dan menit tanpa detik nya

Mulai
    input seconds <- menerima argument dari function yang dipanggil
    ubah nilai seconds nya menjadi menit dan jam:
    hours <- menyimpan nilai hours yang diubah ke jam = seconds / 3600 
    remainingSeconds <- ambil sisa detik setelah mendapatkan hours = seconds % 3600
    minutes <- menyimpan nilai remainingSeconds yang diubah ke menit = remainingSeconds / 60
    
    kembalikan nilai minutes dan hours sesuai yang diminta soal
Selesai
*/

function toTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);

  return `${hours} hour(s) and ${minutes} minute(s)`;
}

console.log(toTime(3600));
console.log(toTime(3601));
console.log(toTime(3500));
console.log(toTime(323500));
console.log(toTime(2400));
