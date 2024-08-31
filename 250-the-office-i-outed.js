// Codewars Challenge 2024
// 250/366
// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

function outed(meet, boss) {
  return (Object.values(meet).reduce((acc, curr) => acc + curr, 0) +
    meet[boss]) /
    Object.keys(meet).length <=
    5
    ? "Get Out Now!"
    : "Nice Work Champ!";
}

console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    "laura"
  )
);
console.log(
  outed(
    {
      tim: 1,
      jim: 3,
      randy: 9,
      sandy: 6,
      andy: 7,
      katie: 6,
      laura: 9,
      saajid: 9,
      alex: 9,
      john: 9,
      mr: 8,
    },
    "katie"
  )
);
console.log(
  outed(
    {
      tim: 2,
      jim: 4,
      randy: 0,
      sandy: 5,
      andy: 8,
      katie: 6,
      laura: 2,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 8,
    },
    "john"
  )
);
console.log(
  outed(
    {
      tim: 2,
      jim: 5,
      randy: 7,
      sandy: 3,
      andy: 2,
      katie: 7,
      laura: 4,
      saajid: 6,
      alex: 6,
      john: 7,
      mr: 5,
    },
    "alex"
  )
);
