// Codewars Challenge 2024
// 277/366
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

All inputs will be valid.

ubah ke array dulu
cek huruf terakhir nya itu huruf apa
di bandingkan dengan array sebelumnya
di kembalikan
 */

function last(x) {
  const toArray = x.split(" ");

  //   const newArray = [];
  //   for (let index = 0; index < toArray.length; index++) {
  //     const lastChar = toArray[index].charAt(toArray[index].length - 1);
  //     newArray.push(lastChar);
  //   }
  //   return newArray.sort((a, b) => a.localeCompare(b));

  //   return toArray.sort((a, b) => {
  //     const lastCharA = a.charAt(a.length - 1);
  //     const lastCharB = b.charAt(b.length - 1);
  //     return lastCharA.localeCompare(lastCharB);
  //   });

  return toArray.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
}

console.log(last("man i need a taxi up to ubud"));
console.log(last("what time are we climbing up the volcano"));
console.log(last("take me to semak"));
