// Codewars Challenge 2024
// 345/366
// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript

/*
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!

pseudocode:
mulai
    input s sebagai string
    
    buat array kosong currentNumber
    buat array kosong numbersList

    => pakai for of untuk mendapatkan nilai parameter s nya, kalau pakai for in posisi index nya yang didapat
    untuk setiap karakter char di s:       
        jika char adalah angka:
            tambahkan char ke currentNumber
        jika char bukan angka:
            jika currentNumber tidak kosong:
                gabungkan currentNumber menjadi string
                ubah menjadi integer
                tambahkan ke numbersList
                kosongkan (reset) currentNumber

    setelah loop selesai:
        jika currentNumber tidak kosong:
            gabungkan currentNumber, ubah ke integer, tambahkan ke numbersList

    largestNumber <- angka terbesar di numbersList
    output largestNumber
selesai

*/

function solve(s) {
  const currentNumber = [];
  const numbersList = [];

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      currentNumber.push(char);
    } else {
      if (currentNumber.length > 0) {
        numbersList.push(+currentNumber.join(""));
        currentNumber.length = 0; // reset currentNumber
      }
    }
  }

  if (currentNumber.length > 0) {
    numbersList.push(+currentNumber.join(""));
  }

  return Math.max(...numbersList);
}

console.log(solve("gh12cdy695m1"));
console.log(solve("2ti9iei7qhr5"));
console.log(solve("vih61w8oohj5"));
