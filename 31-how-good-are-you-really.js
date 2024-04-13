// Codewars Challenge 2024
// 31/366
// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
  //   const average =
  //     classPoints.reduce((accumulator, currentValue) => {
  //       return accumulator + currentValue;
  //     }) / classPoints.length;

  //   return yourPoints > average ? true : false;

  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}

console.log(betterThanAverage([2, 3], 5));
