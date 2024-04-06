// Codewars Challenge 2024
// 29/366
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  return h * 60 * 60_000 + m * 60 * 1000 + s * 1000;
}

console.log(past(1, 1, 1));

/*
1 jam = 60 menit * 60.000 ms
1 menit = 60 detik * 1000 ms
1 detik = 1000 ms

 1 min = 60 s × 1,000 ms/s = 60,000 ms
 */
