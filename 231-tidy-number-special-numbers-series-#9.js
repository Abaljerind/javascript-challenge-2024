// Codewars Challenge 2024
// 231/366
// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

function tidyNumber(n) {
  return (
    n
      .toString()
      .split("")
      .sort((a, b) => a - b)
      .join("") == n.toString()
  );
}

console.log(tidyNumber(12));
console.log(tidyNumber(102));
console.log(tidyNumber(9672));
console.log(tidyNumber(2789));
