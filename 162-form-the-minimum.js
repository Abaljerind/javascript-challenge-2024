// Codewars Challenge 2024
// 162/366
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

function minValue(values) {
  //   // sort values
  //   const sortValues = values.sort((a, b) => a - b);

  //   //   dibuat jadi set
  //   const setValues = new Set(sortValues);

  //   // dikembalikan
  //   return +[...setValues].join("");

  const newArr = Array.from(new Set(values));
  return +newArr.sort().join("");
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([4, 8, 1, 4]));
