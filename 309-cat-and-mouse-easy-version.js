// Codewars Challenge 2024
// 309/366
// https://www.codewars.com/kata/57ee24e17b45eff6d6000164/train/javascript

/*
You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

"C.....m" returns "Escaped!" <-- more than three characters between

"C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.
*/

function catMouse(x) {
  return x
    .split("")
    .filter((char) => {
      return char.includes(".");
    })
    .join("").length <= 3
    ? "Caught!"
    : "Escaped!";
}

console.log(catMouse("C....m"));
console.log(catMouse("C..m"));
console.log(catMouse("C.....m"));
