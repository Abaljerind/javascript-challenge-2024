// Codewars Challenge 2024
// 101/366
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  return str.split("").filter((item) => {
    if (
      item.includes("a") ||
      item.includes("i") ||
      item.includes("u") ||
      item.includes("e") ||
      item.includes("o")
    ) {
      return item;
    }
  }).length;

  //   return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("abracadabra"));
console.log(getCount("hello world"));
console.log(getCount("naruto uzumaki"));
