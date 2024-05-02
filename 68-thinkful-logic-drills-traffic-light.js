// Codewars Challenge 2024
// 68/366
// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
    default:
      break;
  }
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
