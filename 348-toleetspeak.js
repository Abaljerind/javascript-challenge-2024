// Codewars Challenge 2024
// 348/366
// https://www.codewars.com/kata/57c1ab3949324c321600013f/train/javascript

/*
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:

toLeetSpeak("LEET") returns "1337"
In this kata we use a simple LeetSpeak dialect. Use this alphabet:

{
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
}

hasil analisa soal:
apa yang mau dicapai? menampilkan hasil translate bahasa inggris ke LeetSpeak
apa inputnya? hanya menerima input str uppercase saja dan spasi. Tidak ada huruf kecil dan numbers
apa output yang diminta? string dalam bahasa LeetSpeak

pseudocode:
mulai
    strArray = [...] <- ubah str menjadi array
    pattern = {...} <- digunakan untuk mapping elemen arrayStr ke leetspeak

    mapping, untuk tiap elemen strArray:
        jika karakter ada di dalam pattern:
            ganti dengan pattern[elemen]
        jika tidak (misal spasi):
            biarkan saja, kembalikan elemen nya
        
    gabungkan semuanya jadi string
    dan kembalikan hasilnya
selesai
    
*/

function toLeetSpeak(str) {
  const pattern = {
    A: "@",
    B: "8",
    C: "(",
    D: "D",
    E: "3",
    F: "F",
    G: "6",
    H: "#",
    I: "!",
    J: "J",
    K: "K",
    L: "1",
    M: "M",
    N: "N",
    O: "0",
    P: "P",
    Q: "Q",
    R: "R",
    S: "$",
    T: "7",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "2",
  };

  const strArray = str.split("");
  return strArray.map((char) => pattern[char] || char);
}

console.log(toLeetSpeak("LEET"));
console.log(toLeetSpeak("CODEWARS"));
console.log(toLeetSpeak("HELLO WORLD"));
