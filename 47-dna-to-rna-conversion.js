// Codewars Challenge 2024
// 47/366
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  const toRNA = dna.split("");

  //   for (let i = 0; i < toRNA.length; i++) {
  //     if (toRNA[i] == "T") {
  //       toRNA[i] = "U";
  //     }
  //   }
  //   return toRNA.join("");

  //   return dna.replace(/T/g, "U");

  return toRNA
    .map((item) => {
      if (item === "T") {
        return (item = "U");
      } else {
        return item;
      }
    })
    .join("");

  //   return toRNA.map((el) => (el === "T" ? (el = "U") : el)).join("");
}

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
