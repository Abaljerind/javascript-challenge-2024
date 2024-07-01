// Codewars Challenge 2024
// 168/366
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

function rowWeights(array) {
  const team1 = array
    .filter((_, index) => index % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);

  const team2 = array
    .filter((_, index) => index % 2 === 1)
    .reduce((acc, curr) => acc + curr, 0);

  return [team1, team2];
}

console.log(rowWeights([80]));
console.log(rowWeights([100, 50]));
console.log(rowWeights([50, 60, 70, 80]));
console.log(rowWeights([13, 27, 49]));
