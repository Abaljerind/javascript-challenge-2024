// Codewars Challenge 2024
// 244/366
// https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  //   let plantHeight = 0;
  //   let days = 0;

  //   while (plantHeight <= desiredHeight) {
  //     plantHeight += upSpeed;
  //     if (plantHeight >= desiredHeight) {
  //       return days + 1;
  //     }
  //     plantHeight -= downSpeed;
  //     days++;
  //   }

  let days = 1;
  for (
    let height = upSpeed;
    height < desiredHeight;
    height = height + upSpeed
  ) {
    height = height - downSpeed;
    days++;
  }
  return days;
}

console.log(growingPlant(100, 10, 910));
console.log(growingPlant(10, 9, 4));
console.log(growingPlant(73, 32, 765));
