// Codewars Challenge 2024
// 23/366
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 1) return true;
  if (flower2 % 2 === 0 && flower1 % 2 === 1) return true;

  return false;
}

console.log(lovefunc(1, 4));
