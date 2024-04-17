// Codewars Challenge 2024
// 39/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x) {
  return x.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
}

console.log(grow([4, 1, 1, 1, 4]));
