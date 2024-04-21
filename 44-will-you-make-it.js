// Codewars Challenge 2024
// 44/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //   let fuelTotal = mpg * fuelLeft;
  //   if (distanceToPump <= fuelTotal) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return distanceToPump <= mpg * fuelLeft;
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
