// Codewars Challenge 2024
// 125/366
// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a, b) {
  // kode dibawah ini akan mengubah nilai ke biner tetapi jika ada nilai yang negatif maka akan menjadi positif karna adanya >>> yang disebut unsigned right shift, sama dengan Math.abs()
  // return ((a + b) >>> 0).toString(2);

  // kode dibawah ini akan langsung mengubah nilai ke biner apa adanya walaupun negatif
  return (a + b).toString(2);
}

console.log(addBinary(-2, 1));
console.log(addBinary(1, 1));
console.log(addBinary(5, 9));
console.log(addBinary(1, 2));
