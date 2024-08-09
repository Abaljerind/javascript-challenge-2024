// Codewars Challenge 2024
// 233/366
// https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/javascript

function inviteMoreWomen(L) {
  //   const women = L.filter((item) => item < 0).length;
  //   const men = L.filter((item) => item > 0).length;
  //   return men > women;
  return L.reduce((acc, curr) => acc + curr) > 0;
}

console.log(inviteMoreWomen([1, -1, 1]));
console.log(inviteMoreWomen([1, 1, 1]));
console.log(inviteMoreWomen([-1, -1, -1]));
console.log(inviteMoreWomen([1, -1]));
