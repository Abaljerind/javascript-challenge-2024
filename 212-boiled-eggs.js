// Codewars Challenge 2024
// 212/366
// https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript

function cookingTime(eggs) {
  if (eggs == 0) {
    return eggs;
  } else {
    return Math.ceil(eggs / 8) * 5;
  }
}

console.log(cookingTime(0));
console.log(cookingTime(5));
console.log(cookingTime(10));
console.log(cookingTime(14));
