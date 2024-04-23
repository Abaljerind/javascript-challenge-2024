// Codewars Challenge 2024
// 55/366
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  //   return games
  //     .map((game) => {
  //       const [x, y] = game.split(":").map((s) => parseInt(s));
  //       if (x > y) return 3;
  //       if (x < y) return 0;
  //       return 1;
  //     })
  //     .reduce((accumulator, currentValue) => {
  //       return accumulator + currentValue;
  //     });

  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
