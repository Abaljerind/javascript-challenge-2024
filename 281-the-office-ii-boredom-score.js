// Codewars Challenge 2024
// 281/366
// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

/*
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
 */

function boredom(staff) {
  const departmentScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  let totalScore = 0;
  for (const person in staff) {
    const department = staff[person];
    totalScore += departmentScores[department] || 0;
  }

  if (totalScore <= 80) return "kill me now";
  if (totalScore < 100) return "i can handle this";

  return "party time!!";
}

const team1 = {
  tim: "change",
  jim: "accounts",
  randy: "canteen",
  sandy: "change",
  andy: "change",
  katie: "IS",
  laura: "change",
  saajid: "IS",
  alex: "trading",
  john: "accounts",
  mr: "finance",
};

const team2 = {
  tim: "IS",
  jim: "finance",
  randy: "pissing about",
  sandy: "cleaning",
  andy: "cleaning",
  katie: "cleaning",
  laura: "pissing about",
  saajid: "regulation",
  alex: "regulation",
  john: "accounts",
  mr: "canteen",
};

const team3 = {
  tim: "accounts",
  jim: "accounts",
  randy: "pissing about",
  sandy: "finance",
  andy: "change",
  katie: "IS",
  laura: "IS",
  saajid: "canteen",
  alex: "pissing about",
  john: "retail",
  mr: "pissing about",
};

console.log(boredom(team1));
console.log(boredom(team2));
console.log(boredom(team3));
