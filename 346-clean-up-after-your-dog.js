// Codewars Challenge 2024
// 346/366
// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript

/*
You have stumbled across the taste of hell that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

bags = 2
cap = 2
x (or garden) =
[[ _ , _ , _ , _ , _ , _ ],
 [ _ , _ , _ , _ , @ , _ ],
 [ @ , _ , _ , _ , _ , _ ]]
returns 'Clean'

temukan dan kumpulkan semua dog cr@p yang direpresentasikan dengan @
kalau tidak ada bags maka acuhkan cap (kapasitas)
cek apakah cap (kapasitas) untuk mengumpulkan semua cr@p cukup atau tidak
kalau cap (kapasitas) cukup, kembalikan 'Clean'
kalau cap (kapasitas) tidak cukup, kembalikan 'Cr@p'
kalau ada 'D', kembalikan 'Dog!!'

pseudocode:
mulai
    buat variable poops untuk menyimpan hasil dari mencari @ (cr@p)
        jadikan parameter garden menjadi 1 array
    buat variable dogs untuk menyimpan hasil dari mencari D (dog)
        jadikan parameter garden menjadi 1 array
    jika nilai cap sama dengan nilai variable poops:
        kembalikan 'Clean'
    jika nilai poops lebih besar dari pada cap atau jika bags tidak ada, maka biarkan cap (kapasitas) karena kita tidak bisa mengambil @ (cr@p):
        kembalikan 'Cr@p'
    jika dogs lebih dari 0:
        kembalikan 'Dog!!'
selesai

*/

function crap(garden, bags, cap) {
  const poops = garden.flat().filter((crap) => crap === "@");
  const dogs = garden.flat().filter((dog) => dog === "D");

  if (dogs.length > 0) return "Dog!!";

  if (cap >= poops.length) return "Clean";
  return "Cr@p";
}

console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    2,
    2
  )
);
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    1,
    1
  )
);
console.log(
  crap(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2
  )
);

console.log(
  crap(
    [
      ["@", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "@", "_", "_"],
    ],
    9,
    5
  )
);
