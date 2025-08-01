// Codewars Challenge 2024
// 327/366
// https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript

/*

    Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.

Make a function that receive age, and return what they drink.

Rules:

    Children under 14 old.
    Teens under 18 old.
    Young under 21 old.
    Adults have 21 or more.

Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"


*/

function peopleWithAgeDrink(age) {
  return age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";
}

console.log(peopleWithAgeDrink(22));
console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(17));
console.log(peopleWithAgeDrink(18));
console.log(peopleWithAgeDrink(20));
console.log(peopleWithAgeDrink(30));
