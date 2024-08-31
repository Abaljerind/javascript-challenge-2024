// Codewars Challenge 2024
// 249/366
// https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript

function pairs(array, result = 0) {
  // fungsi dibawah ini bisa untuk membuat pasangan dari tiap tiap elemen di dalam array
  //   const consecutiveArray = ar.reduce(function (result, value, index, array) {
  //     if (index % 2 === 0) result.push(array.slice(index, index + 2));
  //     return result;
  //   }, []);

  for (let i = 0; i < array.length - 1; i += 2) {
    if (Math.abs(array[i] - array[i + 1]) === 1) result++;
  }
  return result;
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]));
