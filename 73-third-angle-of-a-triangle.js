// Codewars Challenge 2024
// 73/366
// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

// sudut segitiga = 180 derajat
// rumus menghitung keliling segitiga => a + b + c

function otherAngle(a, b) {
  return 180 - (a + b);
}

console.log(otherAngle(30, 60));
console.log(otherAngle(60, 60));
console.log(otherAngle(43, 78));
console.log(otherAngle(10, 20));
