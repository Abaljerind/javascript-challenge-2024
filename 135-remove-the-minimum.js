// Codewars Challenge 2024
// 135/366
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
 */

function removeSmallest(numbers) {
  //   // cek isi array ada atau tidak
  //   if (numbers.length == 0) {
  //     return [];
  //   }

  //   //   copy isi array numbers agar
  //   const copyNumbers = numbers.slice();

  //   //   mencari nilai terendah dari array baru copyNumbers
  //   const minCopyNumbers = Math.min(...copyNumbers);

  //   //   mencari index dari nilai terendah dari array copyNumbers berdasarkan data minCopyNumbers
  //   const findIndexMinCopyNumbers = copyNumbers.indexOf(minCopyNumbers);

  //   //   menghapus item dari copyNumbers mulai dari findIndexMinCopyNumbers sampai ke item selanjutnya.
  //   copyNumbers.splice(findIndexMinCopyNumbers, 1);

  //   //   mengembalikan copyNumbers yang sudah dihapus item terendah nya.
  //   return copyNumbers;

  return numbers.filter(
    (_, index) => index !== numbers.indexOf(Math.min(...numbers))
  );
}

console.log(removeSmallest([]));
console.log(removeSmallest([262, 297, 221, 158, 207]));
console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
