// Codewars Challenge 2024
// 130/366
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function (busStops) {
  // let totalPeople = 0;
  // for(let i = 0; i < busStops.length; i++) {
  //     totalPeople += busStops[i][0]
  //     totalPeople -= busStops[i][1]
  // }
  // return totalPeople

  return busStops.reduce((people, [getIn, getOut]) => {
    return people + getIn - getOut;
  }, 0);
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
console.log(number([[0, 0]]));
