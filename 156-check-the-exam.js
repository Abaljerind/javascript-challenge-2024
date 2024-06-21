// Codewars Challenge 2024
// 156/366
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(array1, array2) {
  let sum = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] == array1[i]) {
      sum += 4;
    } else if (array2[i] === "") {
      sum += 0;
    } else {
      sum -= 1;
    }
  }
  return sum < 0 ? 0 : sum;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));
