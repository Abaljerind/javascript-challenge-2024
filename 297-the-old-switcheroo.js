// Codewars Challenge 2024
// 297/366
// https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript

/*
Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng' 
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
 */

function vowel2index(str) {
  // kalau str nya kosong maka kembalikan string kosong
  if (str === "") return "";

  // buat array vowels nya
  const vowels = ["a", "i", "u", "e", "o"];

  // kembalkan nilai str yang diubah ke array
  return (
    str
      .split("")
      // lalu di map
      .map((char, index) => {
        // dengan pengecekan apakah char yang diubah ke huruf kecil semua ada atau cocok dengan isi array vowels kalau true, maka kembalikan index nya + 1
        if (vowels.includes(char.toLowerCase())) return index + 1;
        // kalau false, maka kembalikan char nya
        return char;
      })
      // terakhir digabung jadi 1 lagi
      .join("")
  );
}
console.log(vowel2index("this is my string"));
console.log(vowel2index("Codewars is the best site in the world"));
console.log(vowel2index("Tomorrow is going to be raining"));
console.log(vowel2index(""));
console.log(vowel2index("90's cornhole Austin, XOXO."));
