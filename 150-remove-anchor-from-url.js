// Codewars Challenge 2024
// 150/366
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

function removeUrlAnchor(url) {
  //   return url.replace(/#.*/g, "");
  return url.split("#")[0];
}

console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));
console.log(removeUrlAnchor("www.codewars.com/katas/"));
console.log(removeUrlAnchor("www.sausage.edu#porohita"));
