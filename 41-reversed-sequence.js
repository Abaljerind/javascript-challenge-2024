// Codewars Challenge 2024
// 41/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// Build a function that returns an array of integers from n to 1 where n>0.
function reverseSeq(n) {
  //   let result = [];
  //   for (let i = n; i > 0; i--) {
  //     result.push(i);
  //   }

  //   _ dibawah sebagai pengganti parameter pertama yaitu value, bisa diganti jadi 'value' tapi lebih baik _
  return Array(n)
    .fill(0)
    .map((_, index) => {
      return n - index;
    });
}

console.log(reverseSeq(5));
