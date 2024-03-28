// Codewars Challenge 2024
// 12/366
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

function noSpace(x) {
  const xToArray = x.split(" ");

  return xToArray.join("");

  //   shorthand
  // return x.split(" ").join("");

  //   const xToArray = x.split("").filter((item) => {
  //     return item.trim();
  //   });
  //   return xToArray.join("");

  //   return x.replace(/\s/g, "");
}

console.log(noSpace("8aaaaa dddd r     "));
