// Codewars Challenge 2024
// 28/366
// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

function areYouPlayingBanjo(name) {
  //   if (name.charAt(0) === "R" || name.charAt(0) === "r") {
  //     return `${name} plays banjo`;
  //   } else {
  //     return `${name} does not play banjo`;
  //   }

  return name[0] === "R" || name[0] === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Adam"));
