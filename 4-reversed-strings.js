// Codewars Challenge 2024
// 4/366
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str) {
  //   const toArray = str.split("");
  //   const reversedArray = toArray.reverse();

  //   return reversedArray.join("");

  return str.split("").reverse().join("");
}

console.log(solution("naruto"));
