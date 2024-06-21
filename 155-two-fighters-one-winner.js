// Codewars Challenge 2024
// 155/366
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

function declareWinner(fighter1, fighter2, firstAttacker) {
  // tentukan penyerang dan penahan berdasarkan firstAttacker
  let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;

  //   loop pertarungan
  while (attacker.health > 0 && defender.health > 0) {
    // serang defender
    defender.health -= attacker.damagePerAttack;

    // jika health defender habis, kembalikan nama attacker
    if (defender.health <= 0) {
      return attacker.name;
    }

    // tukar peran
    [attacker, defender] = [defender, attacker];
  }

  //   ketika loop selesai kembalikan nama attacker yang masih hidup
  return attacker.health > 0 ? attacker.name : defender.name;
}

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
);
console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")
);
console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harry"
  )
);
console.log(
  declareWinner(
    new Fighter("Jerry", 30, 3),
    new Fighter("Harald", 20, 5),
    "Jerry"
  )
);
