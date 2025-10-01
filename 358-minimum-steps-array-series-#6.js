// Codewars Challenge 2024
// 358/366
// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript

/*
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.

All numbers will be positive.

Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)

Explanation:
We add two smallest elements (1 + 2), their sum is 3 .
Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .


minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)

Explanation:
We add two smallest elements (4 + 2), their sum is 6 .
Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .
Now we add the next smallest number (14 + 9) , so the sum becomes 23 .
Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .


minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)

Explanation:
We add two smallest elements (19 + 17), their sum is 36 .
Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .
We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .
Expected Time Complexity O(n Log n)

- Pahami masalahnya dulu dengan jelas
   mencari berapa kali penjumlahan telah dilakukan sampai nilai nya sama atau lebih dari K dengan nilai nilai terkecil

mulai
buat variable "step" (S) untuk nanti menghitung berapa kali penjumlahan sudah dilakukan sampai "nums" < K = 0
buat variable "sortedNumbers" yang menyimpan nilai "numbers" (N) yang sudah di urutkan dari terkecil ke terbesar
buat variable penampung "num" untuk menghitung apakah "num" sudah lebih besar atau sama dengan dengan nilai awal, "jumlah dua angka terkecil dari 'sortedNumbers'."
loop start
    i = 2, karna "num" sudah menyimpan nilai dari penjumlahan 2 nilai terkecil
    kondisi: selama "num" masih kurang dari sama dengan "value" (K), maka terus lakukan pengulangan
    tambahkan nilai dari sortedNumbers[i] ke variable "num"
    increment S
loop end
jika angka pertama dari "sortedNumbers" lebih besar dari value, maka kembalikan 0
kembalikan nilai S
selesai
*/

function minimumSteps(numbers, value) {
  let step = 1;
  const sortedNumbers = numbers.sort((a, b) => a - b);
  let num = sortedNumbers[0] + sortedNumbers[1];

  for (i = 2; num < value; i++) {
    num += sortedNumbers[i];
    step++;
  }

  if (sortedNumbers[0] > value) return 0;

  return step;
}

console.log(minimumSteps([4, 6, 3], 7));
console.log(minimumSteps([10, 9, 9, 8], 17));
console.log(minimumSteps([8, 9, 10, 4, 2], 23));
console.log(minimumSteps([8, 9, 4, 2], 23));
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));
