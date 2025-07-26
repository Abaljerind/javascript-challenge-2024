// Codewars Challenge 2024
// 322/366
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x) {
  //   if ((x.includes("bad") && !x.includes("good")) || x.length == 0) return "Fail!";

  //   return x.filter((value) => value != "bad").length <= 2 ? "Publish!" : "I smell a series!";

  const countIdeas = x.filter((value) => value != "bad").length;
  return countIdeas < 1 ? "Fail!" : countIdeas <= 2 ? "Publish!" : "I smell a series!";
}

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]));
