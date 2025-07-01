// Codewars Challenge 2024
// 298/366
// https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript

/*
Digital Cypher assigns to each letter of the alphabet unique number. For example:

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26
Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

 s  c  o  u  t
19  3 15 21 20
Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21
  
   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
Task
Write a function that accepts str string and key number and returns an array of integers representing encoded str.

Input / Output
The str input string consists of lowercase characters only.
The key input number is a positive integer.

Example
Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
 */

function encode(str, n) {
  // my way
  const key = n
    .toString()
    .split("")
    .map((num) => +num);

  const inputWord = str.split("").map((newX) => {
    switch (newX) {
      case "z":
        return 26;
        break;
      case "y":
        return 25;
        break;
      case "x":
        return 24;
        break;
      case "w":
        return 23;
        break;
      case "v":
        return 22;
        break;
      case "u":
        return 21;
        break;
      case "t":
        return 20;
        break;
      case "s":
        return 19;
        break;
      case "r":
        return 18;
        break;
      case "q":
        return 17;
        break;
      case "p":
        return 16;
        break;
      case "o":
        return 15;
        break;
      case "n":
        return 14;
        break;
      case "m":
        return 13;
        break;
      case "l":
        return 12;
        break;
      case "k":
        return 11;
        break;
      case "j":
        return 10;
        break;
      case "i":
        return 9;
        break;
      case "h":
        return 8;
        break;
      case "g":
        return 7;
        break;
      case "f":
        return 6;
        break;
      case "e":
        return 5;
        break;
      case "d":
        return 4;
        break;
      case "c":
        return 3;
        break;
      case "b":
        return 2;
        break;
      case "a":
        return 1;
        break;
      default:
        return "";
        break;
    }
  });

  // index % key.length akan selalu mengulang dari awal kunci saat index-nya lebih besar dari panjang kunci.
  return inputWord.map((word, index) => word + key[index % key.length]);
}

console.log(encode("scout", 1939));
console.log(encode("masterpiece", 1939));
