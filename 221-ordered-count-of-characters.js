// Codewars Challenge 2024
// 221/366
// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

function orderedCount(text) {
  return Array.from(
    text
      .split("")
      .reduce(
        (acc, curr) => acc.set(curr, acc.has(curr) ? acc.get(curr) + 1 : 1),
        new Map()
      )
  );
}

console.log(orderedCount("abracadabra"));
console.log(orderedCount("Code Wars"));
console.log(orderedCount("233312"));
