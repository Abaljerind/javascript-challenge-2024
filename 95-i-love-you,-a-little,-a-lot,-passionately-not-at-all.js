// Codewars Challenge 2024
// 95/366
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  //   let index = (nbPetals % 6) - 1;
  //   if (index === -1) {
  //     index = phrases.length - 1;
  //   }
  //   return phrases[index];
  return phrases[(nbPetals - 1) % phrases.length];
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));
