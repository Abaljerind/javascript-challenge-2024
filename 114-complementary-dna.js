// Codewars Challenge 2024
// 114/366
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function dnaStrand(dna) {
  return dna
    .split("")
    .map((item) => {
      switch (item) {
        case "A":
          return "T";
          break;
        case "T":
          return "A";
          break;
        case "G":
          return "C";
          break;
        case "C":
          return "G";
          break;
        default:
          break;
      }
    })
    .join("");
}

console.log(dnaStrand("AAAA"));
console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));
