// Codewars Challenge 2024
// 13/366
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const finder = new SmallestIntegerFinder();
console.log(finder.findSmallestInt([10, 22, 33, 41, 6]));
