// Codewars Challenge 2024
// 235/366
// https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript

// buat function untuk factorialnya
// function factorial dimasukkin ke function strong untuk mengecek apakah n di strong() === hasil dari factorialnya
function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : 1;
}
console.log(factorial(5));

function strong(n) {
  return n
    .toString()
    .split("")
    .map((item) => factorial(+item))
    .reduce((acc, curr) => acc + curr) === n
    ? "STRONG!!!!"
    : "Not Strong !!";
}

console.log(strong(1));
console.log(strong(2));
console.log(strong(145));
console.log(strong(7));
