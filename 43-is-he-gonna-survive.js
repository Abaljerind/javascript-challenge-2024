// Codewars Challenge 2024
// 43/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

// tiap 1 naga butuh 2 bullet untuk mengalahkannya.
function hero(bullets, dragons) {
  //Get Coding!
  // const bulletsUsed = bullets / 2
  // if(bulletsUsed >= dragons) {
  //     return true;
  // } else {
  //     return false;
  // }

  return bullets / 2 >= dragons;
}
console.log(hero(100, 40));
