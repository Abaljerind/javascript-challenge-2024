// Codewars Challenge 2024
// 204/366
// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

function vertMirror(strng) {
  //   const output = [];

  //   strng = strng.split("\n");
  //   for (const key of strng) {
  //     output.push(key.split("").reverse().join(""));
  //   }
  //   return output.join("\n");

  return strng
    .split("\n")
    .map((line) => line.split("").reverse().join(""))
    .join("\n");
}

console.log(vertMirror("hSgdHQ\nHnDMao"));

function horMirror(strng) {
  return strng.split("\n").reverse().join("\n");
}

console.log(horMirror("lVHt\nJVhv"));

function oper(fct, s) {
  return fct(s);
}

console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"));

console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"));
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"));
