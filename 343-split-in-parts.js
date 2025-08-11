// Codewars Challenge 2024
// 343/366
// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:
Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'

Assumptions:
String length is always greater than 0
String has no spaces
Size is always positive
*/

const splitInParts = function (s, partLength) {
  const parts = [];

  // untuk i mulai dari 0 sampai panjang string, naikkan i dengan partLength
  for (let i = 0; i < s.length; i += partLength) {
    let str = s.slice(i, i + partLength);
    parts.push(str);
  }

  return parts.join(" ");
};

console.log(splitInParts("supercalifragilisticexpialidocious", 3));
console.log(splitInParts("HelloKata", 1));
console.log(splitInParts("HelloKata", 9));
