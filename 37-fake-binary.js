// Codewars Challenge 2024
// 37/366
// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

//  you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
/*
x < 5 = 0
x > 5 = 1
 */
function fakeBin(x) {
  const xArray = x.split("");
  //   return xArray
  //     .map((item) => {
  //       if (item < 5) {
  //         item = 0;
  //       } else {
  //         item = 1;
  //       }
  //       return item;
  //     })
  //     .join("");
  return xArray
    .map((item) => {
      return item < 5 ? 0 : 1;
    })
    .join("");
}

console.log(fakeBin("45385593107843568"));
