// Codewars Challenge 2024
// 19/366
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {
  let nameSplit = name.split(" ");
  let firstName = nameSplit[0];
  let lastName = nameSplit[1];

  return firstName[0].toUpperCase() + "." + lastName[0].toUpperCase();
}

console.log(abbrevName("Patrick Feenan"));
