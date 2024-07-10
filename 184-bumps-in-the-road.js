// Codewars Challenge 2024
// 184/366
// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

function bump(x) {
  // menghitung jumlah huruf 'n' dalam x
  let bumps = x.split("n").length - 1;

  //   mengembalikan nilai woohoo jika bumps kurang dari 15, jika lebih maka car dead
  return bumps <= 15 ? "Woohoo!" : "Car Dead";
}

console.log(bump("n"));
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));
