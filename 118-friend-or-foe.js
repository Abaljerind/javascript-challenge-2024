// Codewars Challenge 2024
// 118/366
// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends) {
  return friends.filter((name) => name.length == 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
);
