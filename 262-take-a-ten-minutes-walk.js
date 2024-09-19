// Codewars Challenge 2024
// 262/366
// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  // cek langkah nya apakah 10 langkah?
  if (walk.length !== 10) return false;

  // cek apakah arah north dan south nya sama jumlahnya?
  const northSouth =
    walk.filter((way) => way === "n").length ===
    walk.filter((way) => way === "s").length;

  // cek apakah arah east dan west nya sama jumlahnya?
  const eastWest =
    walk.filter((way) => way === "e").length ===
    walk.filter((way) => way === "w").length;

  return northSouth && eastWest;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
