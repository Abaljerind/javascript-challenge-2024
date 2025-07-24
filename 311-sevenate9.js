// Codewars Challenge 2024
// 311/366
// https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript

/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

algoritma
ubah nilai str menjadi array
cek apakah nilai 9 ada
cek apakah kiri dan kanan nilai 9 tersebut adalah angka 7
kalau iya maka hapus angka 9 tersebut
kalau salah satu dari sisi angka 9 nya tidak ada angka 7 maka angka 9 nya dibiarkan 
*/

function sevenAte9(str) {
  //   const strToArray = str.toString().split("");

  //   return strToArray
  //     .filter((num, index) => {
  //       if (num === "9" && strToArray[index - 1] === "7" && strToArray[index + 1] === "7") {
  //         return num !== "9";
  //       }
  //       return num;
  //     })
  //     .join("");

  // regex way
  return str.toString().replace(/(?<=7)9(?=7)/g, "");
}

console.log(sevenAte9(79712312));
console.log(sevenAte9(79797));
console.log(sevenAte9(165561786121789797n));
