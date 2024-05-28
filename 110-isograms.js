// Codewars Challenge 2024
// 110/366
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
function isIsogram(str) {
  //   // buat variable penampung untuk Set karena Set tidak mengembalikan nilai yang sama, jadi kalo ada 'aa' return nya 'a' aja.
  //   const strSet = new Set(str.toLowerCase());

  //   //   dibuat jadi perulangan dengan for of untuk menyusun ulang kalimatnya.
  //   let text = "";
  //   for (const x of strSet) {
  //     text += x;
  //   }

  //   //   dikembalikan dan di cek apakah sama dengan nilai str diawal.
  //   return text == str.toLowerCase();

  //   disini yang dicek ukuran jumlahnya, untuk Set pakainya size, ga masalah pake lower atau uppercase
  return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
