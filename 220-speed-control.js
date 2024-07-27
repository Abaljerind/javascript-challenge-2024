// Codewars Challenge 2024
// 220/366
// https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript

function gps(s, x) {
  let maxSpeed = 0;
  for (let i = 1; i < x.length; i++) {
    let deltaDistance = x[i] - x[i - 1];
    let speed = (3600 * deltaDistance) / s;
    if (speed > maxSpeed) {
      maxSpeed = speed;
    }
  }
  return Math.floor(maxSpeed);
}

var s = 20;
var x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61];
console.log(gps(s, x));
