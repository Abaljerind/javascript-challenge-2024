// Codewars Challenge 2024
// 64/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
function rentalCarCost(d) {
  let price = d * 40; // harga dasar perhari
  //   harga rental untuk lebih dari 7 hari
  if (d >= 7) {
    return (price -= 50);
  } else if (d >= 3 && d <= 7) {
    // harga rental untuk 3 hari atau lebih tapi kurang dari 7 hari
    return (price -= 20);
  }
  return price;
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));
console.log(rentalCarCost(11));
