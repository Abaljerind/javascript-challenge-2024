// Codewars Challenge 2024
// 236/366
// https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

function addLetters(letters) {
  if (letters.length === 0) return "z";

  // mengkonversi huruf ke angka
  let totalLetter = letters
    .map((letter) => letter.charCodeAt(0) - 96)
    .reduce((acc, curr) => acc + curr, 0);

  // menangani overflow
  totalLetter = ((totalLetter - 1) % 26) + 1;

  // mengkonversi angka kembali ke huruf
  return String.fromCharCode(totalLetter + 96);
}

console.log(addLetters(["a", "b", "c"]));
console.log(addLetters(["z"]));
console.log(addLetters(["a", "b"]));
console.log(addLetters(["z", "a"]));
