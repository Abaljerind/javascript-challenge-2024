// Codewars Challenge 2024
// 257/366
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  // cara 1
  //   let first3digits = numbers.slice(0, 3).join("");
  //   let second3digits = numbers.slice(3, 6).join("").concat("-");
  //   let lastDigits = numbers.slice(6, 10).join("");
  //   let phoneNumber = "";
  //   for (let i = 0; i < first3digits.length; i++) {
  //     phoneNumber = `(${first3digits}) `;
  //   }

  //   for (let i = 0; i < second3digits.length; i++) {
  //     phoneNumber += `${second3digits[i]}`;
  //   }

  //   for (let i = 0; i < lastDigits.length; i++) {
  //     phoneNumber += `${lastDigits[i]}`;
  //   }

  //   return phoneNumber;

  // cara 2
  //   numbers = numbers.join("");
  //   return (
  //     "(" +
  //     numbers.substring(0, 3) +
  //     ") " +
  //     numbers.substring(3, 6) +
  //     "-" +
  //     numbers.substring(6)
  //   );

  // cara 3
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
