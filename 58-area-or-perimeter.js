// Codewars Challenge 2024
// 58/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

const areaOrPerimeter = function (l, w) {
  //   if (l === w) {
  //     return l * w;
  //   }

  //   if (l !== w) {
  //     return 2 * (l + w);
  //   }

  return l === w ? l * w : 2 * (l + w);
};

console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));
console.log(areaOrPerimeter(779, 1321));
