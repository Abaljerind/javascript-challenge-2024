// Codewars Challenge 2024
// 330/366
// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript

/*
You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

    true if all developers in the list code in the same language; or
    false otherwise.

For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

your function should return true.

Notes:

    The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
    The input array will always be valid and formatted as in the example above.

This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/

function isSameLanguage(list) {
  // cara pertama:
  //   let languages = [];

  //   for (const language of list) {
  //     languages.push(language.language);
  //   }

  //   return new Set(languages).size === 1;

  // cara kedua:
  //   return list.every((lang) => lang.language === list[0].language);

  // cara ketiga:
  //   return new Set(list.map((lang) => lang.language)).size === 1;

  // cara keempat:
  return [...new Set(list.map((lang) => lang.language))].length === 1;
}

var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
];

var list2 = [
  {
    firstName: "Mariami",
    lastName: "G.",
    country: "Georgia",
    continent: "Europe",
    age: 29,
    language: "Python",
  },
  {
    firstName: "Mia",
    lastName: "H.",
    country: "Germany",
    continent: "Europe",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Maria",
    lastName: "I.",
    country: "Greece",
    continent: "Europe",
    age: 32,
    language: "C",
  },
];

console.log(isSameLanguage(list1));
console.log(isSameLanguage(list2));
