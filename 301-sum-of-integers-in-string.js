// Codewars Challenge 2024
// 301/366
// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

*/

function sumOfIntegersInString(s) {
  //   const matchesInt = s.match(/\d+/g);
  // /\d+/g artinya cari satu atau lebih digit (cocokkan angka dengan lebih dari 1 digit juga) dan g untuk mencari semua angka yang muncul

  //   if (!matchesInt) return 0;

  //   return matchesInt.map((num) => +num).reduce((acc, curr) => acc + curr, 0);

  return s
    .replace(/\D/gi, " ")
    .split(" ")
    .map((num) => Number(num))
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfIntegersInString("12.4"));
console.log(sumOfIntegersInString("h3ll0w0rld"));
console.log(
  sumOfIntegersInString(
    "Our company made approximately 1 million in gross revenue last quarter."
  )
);
console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
  )
);
