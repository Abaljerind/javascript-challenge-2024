// Codewars Challenge 2024
// 151/366
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

// write the function isAnagram
function isAnagram(test, original) {
  let arrTest = test
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toLowerCase();
  let arrOrig = original
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("")
    .toLowerCase();

  return arrTest == arrOrig;
}
console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
console.log(isAnagram("Twoo", "WooT"));
console.log(isAnagram("dumble", "bumble"));
console.log(isAnagram("ound", "round"));
