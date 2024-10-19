// Codewars Challenge 2024
// 267/366
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

goals => mengurutkan kata katanya sesuai dengan angka yang ada di tiap kata.

1. buat variable penampung berupa array kosong
2. buat for loop dengan initial value nya yang dimulai dari 1, terus masukin ke variable penampungnya
3. terus tampilin hasilnya di akhir dalam bentuk string
*/

function order(words) {
  if (words === "") return "";

  const wordsArr = words.split(" ");
  const wordsLength = wordsArr.length;
  let output = [];

  for (let i = 1; i <= wordsLength; i++) {
    output.push(wordsArr.find((word) => word.includes(`${i}`)));
  }
  return output.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
