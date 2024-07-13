// Codewars Challenge 2024
// 191/366
// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript

function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  const threshold_content = content * (threshold / 100);
  while (content >= threshold_content) {
    content *= 1 - evap_per_day / 100;
    days += 1;
  }
  return days;
}

console.log(evaporator(10, 10, 10));
console.log(evaporator(10, 10, 5));
