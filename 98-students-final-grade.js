// Codewars Challenge 2024
// 98/366
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

/* 
This function should return a number (final grade). There are four types of final grades:

    100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0, in other cases

 */
function finalGrade(exam, projects) {
  //   if (exam > 90 || projects > 10) {
  //     return 100;
  //   } else if (exam > 75 && projects >= 5) {
  //     return 90;
  //   } else if (exam > 50 && projects >= 2) {
  //     return 75;
  //   } else {
  //     return 0;
  //   }

  if (exam > 90 || projects > 10) return 100;
  if ((exam > 75) & (projects >= 5)) return 90;
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
console.log(finalGrade(10, 15));
console.log(finalGrade(55, 3));
console.log(finalGrade(51, 0));
