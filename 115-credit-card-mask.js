// Codewars Challenge 2024
// 115/366
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
  // padStart untuk menambahkan nilai didepan string, sama kaya fill di array
  return cc.slice(-4).padStart(cc.length, "#");
}

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));
