// Codewars Challenge 2024
// 38/366
// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

/* (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */
function bmi(weight, height) {
  let totalBmi = weight / height ** 2;
  if (totalBmi <= 18.5) {
    return "Underweight";
  } else if (totalBmi <= 25.0) {
    return "Normal";
  } else if (totalBmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));
