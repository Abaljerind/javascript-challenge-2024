// Codewars Challenge 2024
// 306/366
// https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript

/*
My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.
More examples:
movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)
*/

function movie(card, ticket, perc) {
  let n = 0; // jumlah kali tonton
  let total_A = 0; // total harga tanpa kartu
  let total_B = card; // total harga dengan kartu, mulai dari harga kartu
  let discounted_ticket = ticket * perc; // harga tiket pertama dengan kartu

  while (Math.ceil(total_B) >= total_A) {
    n += 1;
    total_A = n * ticket; // harga sistem a
    total_B = total_B + discounted_ticket; // tambah harga tiket diskon ke total b
    discounted_ticket = discounted_ticket * perc; // diskon semakin kecil
  }

  return n; // kembalikan berapa kali nonton nya
}

console.log(movie(500, 15, 0.9));
console.log(movie(100, 10, 0.95));
