// Codewars Challenge 2024
// 269/366
// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript

/*
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15

Pseudocode:
Aturannya -> hasil lemparan dadu akan digandakan (dua kali lemparan), lalu hasilnya ditambahkan ke posisi saat ini.

roll * 2 + position

 */

function move(position, roll) {
  // return the new position
  return roll * 2 + position;
}

console.log(move(3, 6));
