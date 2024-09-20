// Codewars Challenge 2024
// 263/366
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  text = text.toLowerCase();
  let result = [];

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= "a" && char <= "z") {
      let position = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
      result.push(position);
    }
  }
  return result.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
console.log(alphabetPosition("The"));
