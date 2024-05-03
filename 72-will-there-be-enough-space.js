// Codewars Challenge 2024
// 72/366
// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

/* 
    - cap is the amount of people the bus can hold excluding the driver. = kapasitas
    - on is the number of people on the bus excluding the driver. = yang sudah naik
    - wait is the number of people waiting to get on to the bus excluding the driver. = yang sedang menunggu

    -If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
 */
function enough(cap, on, wait) {
  return cap - (on + wait) >= 0 ? 0 : on + wait - cap;
}

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
console.log(enough(94, 52, 63));
