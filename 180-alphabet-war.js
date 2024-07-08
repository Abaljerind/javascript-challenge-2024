// Codewars Challenge 2024
// 180/366
// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(fight) {
  const leftSide = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide = { m: 4, q: 3, d: 2, z: 1 };

  let leftScore = 0;
  let rightScore = 0;

  for (let goal of fight) {
    if (leftSide[goal]) {
      leftScore += leftSide[goal];
    } else if (rightSide[goal]) {
      rightScore += rightSide[goal];
    }
  }

  if (leftScore > rightScore) {
    return "Left side wins!";
  } else if (rightScore > leftScore) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("z"));
console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("wwwwww"));
