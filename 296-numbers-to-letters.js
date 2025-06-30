// Codewars Challenge 2024
// 296/366
// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
 */

function switcher(x) {
  // return x
  //   .map((newX) => {
  //     switch (newX) {
  //       case "29":
  //         return " ";
  //         break;
  //       case "28":
  //         return "?";
  //         break;
  //       case "27":
  //         return "!";
  //         break;
  //       case "26":
  //         return "a";
  //         break;
  //       case "25":
  //         return "b";
  //         break;
  //       case "24":
  //         return "c";
  //         break;
  //       case "23":
  //         return "d";
  //         break;
  //       case "22":
  //         return "e";
  //         break;
  //       case "21":
  //         return "f";
  //         break;
  //       case "20":
  //         return "g";
  //         break;
  //       case "19":
  //         return "h";
  //         break;
  //       case "18":
  //         return "i";
  //         break;
  //       case "17":
  //         return "j";
  //         break;
  //       case "16":
  //         return "k";
  //         break;
  //       case "15":
  //         return "l";
  //         break;
  //       case "14":
  //         return "m";
  //         break;
  //       case "13":
  //         return "n";
  //         break;
  //       case "12":
  //         return "o";
  //         break;
  //       case "11":
  //         return "p";
  //         break;
  //       case "10":
  //         return "q";
  //         break;
  //       case "9":
  //         return "r";
  //         break;
  //       case "8":
  //         return "s";
  //         break;
  //       case "7":
  //         return "t";
  //         break;
  //       case "6":
  //         return "u";
  //         break;
  //       case "5":
  //         return "v";
  //         break;
  //       case "4":
  //         return "w";
  //         break;
  //       case "3":
  //         return "x";
  //         break;
  //       case "2":
  //         return "y";
  //         break;
  //       case "1":
  //         return "z";
  //         break;
  //       default:
  //         return "";
  //         break;
  //     }
  //   })
  //   .join("");

  const alpha = " zyxwvutsrqponmlkjihgfedcba!? ";
  return x.map((item) => alpha[item]).join("");
}

console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]));
console.log(switcher(["25", "7", "8", "4", "14", "23", "8", "25", "23", "29", "16", "16", "4"]));
console.log(switcher(["4", "24"]));
