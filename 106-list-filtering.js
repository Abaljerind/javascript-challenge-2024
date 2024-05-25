// Codewars Challenge 2024
// 106/366
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
  // Return a new array with the strings filtered out
  //   return l.filter((item) => {
  //     if ((item = 0 || typeof item != "string")) {
  //       return item;
  //     }
  //   });

  return l.filter((item) => typeof item == "number");
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
