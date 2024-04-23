// Codewars Challenge 2024
// 56/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade(s1, s2, s3) {
  //   const average = Math.floor((s1 + s2 + s3) / 3);
  //   if (average >= 90 && average <= 100) {
  //     return "A";
  //   } else if (average >= 80 && average < 90) {
  //     return "B";
  //   } else if (average >= 70 && average < 80) {
  //     return "C";
  //   } else if (average >= 60 && average < 70) {
  //     return "D";
  //   } else {
  //     return "F";
  //   }

  const avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90:
      return "A";
    case avg >= 80:
      return "B";
    case avg >= 70:
      return "C";
    case avg >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(82, 85, 87));
console.log(getGrade(75, 70, 79));
console.log(getGrade(66, 62, 68));
console.log(getGrade(48, 55, 52));
