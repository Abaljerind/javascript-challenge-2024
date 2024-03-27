// Codewars Challenge 2024
// 3/366
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  // buat variable result untuk hasil penjumlahan
  //   let result = 0;
  //   //   filter param arr agar yang ditampilkan hanya yang positif
  //   const filteredArray = arr.filter(checkPositive);
  //   //   buat function untuk mengecek number bernilai positif, kembalikan / tampilkan number yang lebih dari atau sama dengan 0
  //   function checkPositive(number) {
  //     return number >= 0;
  //   }
  //   // buat perulangan berdasarkan variable filteredArray
  //   for (i = 0; i < filteredArray.length; i++) {
  //     result += filteredArray[i];
  //   }
  //   //   menampilkan variable result
  //   return result;
}

function positiveSum(arr) {
  let result = 0;

  const filteredArray = arr.filter((item) => {
    return item >= 0;
  });

  return filteredArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
}

console.log(positiveSum([1, -2, -3, -4, -5]));
