// Codewars Challenge 2024
// 8/366
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str) {
  //   const strArray = str.split("");
  //   strArray.pop();
  //   strArray.shift();
  //   return strArray.join("");

  return str.slice(1, -1);
}

console.log(removeChar("ywach"));
