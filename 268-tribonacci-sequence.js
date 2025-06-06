// Codewars Challenge 2024
// 268/366
// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

/*
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; 
if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

goals => membuat sebuah array yang berisi nilai nilai yang dijumlahkan 3 sampai nilai batasnya yaitu n.

pseudocode:
    kalau n == 0 kembalikan array kosong.
    
*/

// function tribonacci(signature, n) {
//   if (n === 0) return [];

//   if (n <= 3) return signature.slice(0, n);

//   let result = [...signature];

//   for (let i = 0; i < n; i++) {
//     if (result.length < n) {
//       const sliceResult = result.slice(-3);
//       const sumSliceResult = sliceResult.reduce((a, b) => a + b);
//       result.push(sumSliceResult);
//     }
//   }
//   return result;
// }

// *********** //
// versi chatgpt
function tribonacci(signature, n) {
  const result = [...signature];

  for (let i = 3; i < n; i++) {
    const sum = result[i - 1] + result[i - 2] + result[i - 3];
    console.log(sum);
    result.push(sum);
  }

  return result;
}

console.log(tribonacci([300, 200, 100], 0));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0, 0, 1], 10));
