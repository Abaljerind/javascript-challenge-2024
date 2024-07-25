// Codewars Challenge 2024
// 211/366
// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) {
      return count + "<0";
    } else if (count == 0) {
      return "0=0";
    } else {
      let sum = 0;
      let sequence = "";
      for (let i = 0; i <= count; i++) {
        sum += i;
        sequence += i + (i < count ? "+" : "");
      }
      return sequence + " = " + sum;
    }
  };

  return SequenceSum;
})();

console.log(SequenceSum.showSequence(6));
console.log(SequenceSum.showSequence(-15));
console.log(SequenceSum.showSequence(0));
