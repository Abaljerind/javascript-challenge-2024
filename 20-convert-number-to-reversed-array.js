// Codewars Challenge 2024
// 20/366
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  // dibawah ini masih string bentuknya
  //   const transformNum = n.toString().split('');
  //   return transformNum.reverse()

  // yang ini sudah number
  //   return Array.from(String(n), Number).reverse();

  // dengan map
  return n
    .toString()
    .split("")
    .map((i) => parseInt(i))
    .reverse();
}

console.log(digitize(54321));
