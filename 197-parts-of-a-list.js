// Codewars Challenge 2024
// 197/366
// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partlist(arr) {
  const result = [];
  // for (let i = 0; i < arr.length - 1; i++) {
  //   result.push(arr.join(" ").split(" ").slice(0, i + 1).join(' '));
  //   result.push(arr.join(" ").split(" ").slice(i + 1).join(' '))
  // }
  for (let i = 1; i < arr.length; i++) {
    const part1 = arr.slice(0, i).join(" ");
    const part2 = arr.slice(i).join(" ");
    result.push([part1, part2]);
  }
  return result;
}
//  [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
// console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]));
// console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]));
