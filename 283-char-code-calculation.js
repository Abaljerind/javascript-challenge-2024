// Codewars Challenge 2024
// 283/366
// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

 */

function calc(x) {
  // turn x into ascii code and join them
  const total1 = x
    .split("")
    .map((str) => str.charCodeAt())
    .join("");

  //   turn '7' in total1 to '1' and join them
  const total2 = total1
    .split("")
    .map((num) => {
      if (num === "7") return "1";
      return num;
    })
    .join("");

  //   total1 - total2 after both of them turn to int and sum of both digits
  return (
    total1
      .split("")
      .map((num) => +num)
      .reduce((acc, curr) => acc + curr) -
    total2
      .split("")
      .map((num) => +num)
      .reduce((acc, curr) => acc + curr)
  );
}

console.log(calc("abcdef"));
console.log(calc("ifkhchlhfd"));
console.log(calc("aaaaaddddr"));
console.log(calc("wcwkockd"));
