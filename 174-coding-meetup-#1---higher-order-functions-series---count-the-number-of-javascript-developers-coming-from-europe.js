// Codewars Challenge 2024
// 174/366
// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

function countDevelopers(list) {
  //   let count = 0;
  //   for (let developers in list) {
  //     if (
  //       list[developers].continent === "Europe" &&
  //       list[developers].language === "JavaScript"
  //     ) {
  //       count++;
  //     }
  //   }
  //   return count;

  return list.filter(
    (dev) => dev.continent === "Europe" && dev.language === "JavaScript"
  ).length;
}

const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];

const list2 = [
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 19,
    language: "HTML",
  },
  {
    firstName: "Lukas",
    lastName: "R.",
    country: "Austria",
    continent: "Europe",
    age: 89,
    language: "HTML",
  },
];

const list3 = [
  {
    firstName: "Nikau",
    lastName: "R.",
    country: "New Zealand",
    continent: "Oceania",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Manuel",
    lastName: "C.",
    country: "Equatorial Guinea",
    continent: "Africa",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Rimas",
    lastName: "C.",
    country: "Jordan",
    continent: "Asia",
    age: 44,
    language: "Java",
  },
  {
    firstName: "Mohamed",
    lastName: "F.",
    country: "Morocco",
    continent: "Africa",
    age: 40,
    language: "Ruby",
  },
  {
    firstName: "Sebastian",
    lastName: "W.",
    country: "Venezuela",
    continent: "Americas",
    age: 28,
    language: "Python",
  },
];

console.log(countDevelopers(list1));
console.log(countDevelopers(list2));
console.log(countDevelopers(list3));
