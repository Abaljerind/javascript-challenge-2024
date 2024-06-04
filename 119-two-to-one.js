// Codewars Challenge 2024
// 119/366
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  // dibawah sini s1 dan s2 dibandingkan length nya mana yang lebih panjang
  //   s1 = s1.split("").sort();
  //   let newS1 = new Set(s1);
  //   let textS1 = "";
  //   for (const word of newS1) {
  //     textS1 += word;
  //   }

  //   s2 = s2.split("").sort();
  //   let newS2 = new Set(s2);
  //   let textS2 = "";
  //   for (const word of newS2) {
  //     textS2 += word;
  //   }

  //   return textS1.length
  //   return textS1.length > textS2.length ? textS1 : textS2;

  //   dibawah sini s1 dan s2 digabungkan jadi 1
  //   const setS3 = new Set([...s1, ...s2].sort());
  //   let text = "";
  //   for (const word of setS3) {
  //     text += word;
  //   }
  //   return text;

  // sorthand
  return [...new Set(s1 + s2)].sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
