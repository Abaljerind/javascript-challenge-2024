// Codewars Challenge 2024
// 234/366
// https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript

function balancedNum(number) {
  const strNum = number.toString();
  const length = strNum.length;
  const midIndex = Math.floor(length / 2);

  let leftSum = 0;
  let rightSum = 0;

  if (length % 2 === 0) {
    // Jika panjang angka genap, ada dua digit tengah
    leftSum = sumDigits(strNum.slice(0, midIndex - 1));
    rightSum = sumDigits(strNum.slice(midIndex + 1));
  } else {
    // Jika panjang angka ganjil, ada satu digit tengah
    leftSum = sumDigits(strNum.slice(0, midIndex));
    rightSum = sumDigits(strNum.slice(midIndex + 1));
  }

  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}

function sumDigits(str) {
  return str.split("").reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(balancedNum(7));
console.log(balancedNum(13));
console.log(balancedNum(959));
console.log(balancedNum(432));
console.log(balancedNum(1024));
