// Codewars Challenge 2024
// 121/366
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  //   return Math.sqrt(sq)
  //   if (Number.isInteger((Math.sqrt(sq) + 1) ** 2)) {
  //     return (sq = (Math.sqrt(sq) + 1) ** 2);
  //   } else {
  //     return -1;
  //   }

  return Number.isInteger((Math.sqrt(sq) + 1) ** 2)
    ? (sq = (Math.sqrt(sq) + 1) ** 2)
    : -1;
}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));
console.log(findNextSquare(155));
