// Codewars Challenge 2024
// 266/366
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

/* 
Angka narsistik adalah bilangan yang jumlah digit-digitnya yang dipangkatkan dengan jumlah digitnya, sama dengan bilangan itu sendiri. Sebagai contoh, 153 adalah angka narsistik karena 1^3 + 5^3 + 3^3 = 153. 
 153 (3 digits)
 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

 1652 (4 digits)
 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

 1. harus tau jumlah digitnya ada berapa?       // const valueLength = value.toString().length;
 2. jumlah digitnya dikalikan dengan tiap tiap digit yang ada yang sudah dipisah.
 3. jumlahkan hasil perkalian digitnya.
 4. bandingkan digit input dengan hasil jumlah dari hasil perkaliannya.
*/

function narcissistic(value) {
  const valueToString = value.toString();
  const valueDigits = valueToString.length;
  const isNarcissisticValue = valueToString
    .split("")
    .map((item) => Math.pow(+item, valueDigits))
    .reduce((acc, curr) => acc + curr, 0);

  return value === isNarcissisticValue;
}

console.log(narcissistic(153));
console.log(narcissistic(1652));
