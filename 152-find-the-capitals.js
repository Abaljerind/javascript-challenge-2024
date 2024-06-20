// Codewars Challenge 2024
// 152/366
// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

function capitals(word) {
  //   const arr = word.split("");
  //   const capitals = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] == arr[i].toUpperCase()) {
  //       capitals.push(i);
  //     }
  //   }
  //   return capitals;

  return word.match(/[A-Z]/g).map((x) => {
    return word.indexOf(x);
  });
}

console.log(capitals("CodEWaRs"));
