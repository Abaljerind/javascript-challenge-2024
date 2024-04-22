// Codewars Challenge 2024
// 52/366
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
  //   if (p1 === p2) {
  //     return "Draw!";
  //   } else if (
  //     (p1 === "rock" && p2 === "scissors") ||
  //     (p1 === "scissors" && p2 === "paper") ||
  //     (p1 === "paper" && p2 === "rock")
  //   ) {
  //     return "Player 1 won!";
  //   } else if (
  //     (p2 === "rock" && p1 === "scissors") ||
  //     (p2 === "scissors" && p1 === "paper") ||
  //     (p2 === "paper" && p1 === "rock")
  //   ) {
  //     return "Player 2 won!";
  //   }

  if (p1 === p2) return "Draw!";
  const rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "paper"));
console.log(rps("paper", "rock"));

console.log(rps("scissors", "rock"));
console.log(rps("paper", "scissors"));
console.log(rps("rock", "paper"));

console.log(rps("rock", "rock"));
console.log(rps("paper", "paper"));
console.log(rps("scissors", "scissors"));
