// Codewars Challenge 2024
// 0/366
// rename title from codewars to be a name of a file

function title(str) {
  return str.replace(/ /g, "-").toLowerCase() + ".js";
}

console.log(title("Beginner Series #3 Sum of Numbers"));
