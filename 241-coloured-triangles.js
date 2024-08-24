// Codewars Challenge 2024
// 241/366
// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript

function triangle(row) {
  // Step 1: If the length of the input string is 1, return that color
  if (row.length === 1) return row;

  // Step 2: Define a helper function to determine the new color
  function newColor(color1, color2) {
    if (color1 === color2) {
      return color1;
    } else {
      // If colors are different, return the missing color
      return "RGB".replace(color1, "").replace(color2, "");
    }
  }

  // Step 3: Iterate until the length of the row is reduced to 1
  while (row.length > 1) {
    let newRow = "";
    for (let i = 0; i < row.length - 1; i++) {
      newRow += newColor(row[i], row[i + 1]);
    }
    row = newRow; // Update row with the newly generated row
  }

  // Step 4: Return the last color remaining
  return row;
}

console.log(triangle("GB"));
console.log(triangle("RRR"));
console.log(triangle("RGBG"));
console.log(triangle("RBRGBRB"));
