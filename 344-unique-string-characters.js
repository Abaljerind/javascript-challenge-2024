// Codewars Challenge 2024
// 344/366
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript

/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Pseudo-code:

mulai
    input str a
    input str b
    ubah str a menjadi arrayA 
    ubah str b menjadi arrayB

    hasil1 <- karakter pada arrayA yang tidak ada di arrayB
    hasil2 <- karakter pada arrayB yang tidak ada di arrayA

    gabungkan keduanya dalam 1 array didalam array result
    
    output tampilkan hasil array result
selesai
*/

function solve(a, b) {
  //   const arrayA = a.split("");
  //   const arrayB = b.split("");

  //   const resultA = arrayA.filter((char) => !arrayB.includes(char));
  //   const resultB = arrayB.filter((char) => !arrayA.includes(char));

  //   return [...resultA, ...resultB].join("");

  let setA = new Set(a);
  let setB = new Set(b);

  return [...(a + b)].filter((char) => setA.has(char) ^ setB.has(char)).join("");
}

console.log(solve("xyab", "xzca"));
console.log(solve("xyabb", "xzca"));
console.log(solve("abcd", "xyz"));
