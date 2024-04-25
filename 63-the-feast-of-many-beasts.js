// Codewars Challenge 2024
// 63/366
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {
  //   if (
  //     beast[0] === dish[0] &&
  //     beast[beast.length - 1] === dish[dish.length - 1]
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
