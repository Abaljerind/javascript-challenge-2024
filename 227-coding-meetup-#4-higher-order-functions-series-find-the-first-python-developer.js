// Codewars Challenge 2024
// 227/366
// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript

function getFirstPython(list) {
  //   let text = "";
  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i].language == "Python") {
  //       return (text = `${list[i].firstName}, ${list[i].country}`);
  //     }
  //   }
  //   return "There will be no Python developers";

  const findPythonDev = list.find((dev) => dev.language === "Python");
  return findPythonDev
    ? `${findPythonDev.firstName}, ${findPythonDev.country}`
    : "There will be no Python developers";
}

var list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

var list2 = [
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Amar",
    lastName: "V.",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    age: 32,
    language: "Ruby",
  },
];

console.log(getFirstPython(list1));
console.log(getFirstPython(list2));
