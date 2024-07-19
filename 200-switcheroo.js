// Codewars Challenge 2024
// 200/366
// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

function switcheroo(x) {
  //   let tempX = x.replace(/a/g, "__PLACEHOLDER__");
  //   tempX = tempX.replace(/b/g, "a");
  //   return tempX.replace(/__PLACEHOLDER__/g, "b");
  return x.replace(/[ab]/g, (x) => (x == "a" ? "b" : "a"));
}

console.log(switcheroo("abc"));
console.log(switcheroo("aaabcccbaaa"));
console.log(switcheroo("ccccc"));
