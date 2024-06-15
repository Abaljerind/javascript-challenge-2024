// Codewars Challenge 2024
// 142/366
// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

function calculateYears(principal, interest, tax, desired) {
  if (desired === principal) {
    return 0;
  }

  let years = 0;
  while (principal < desired) {
    let sumInterest = principal * interest;
    let netInterest = sumInterest * (1 - tax);
    principal += netInterest;
    years++;
  }
  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));
