// Codewars Challenge 2024
// 347/366
// https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript

/*
An infinite number of shelves are arranged one above the other in a staggered fashion.
The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘
Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

hasil analisa sendiri dan chatgpt:
        perlu menemukan nilai yang paling sedikit dari lompatan si kucing dari awal sampai akhir
        input: kucing hanya bisa melompati 1 atau 3 rak diatas nya saja => dari i ke i + 1 atau i + 3

        kalau kucing bisa lompat +3 tanpa melewati finish -> lompat 3
        kalau tidak bisa lompat +3 karena jaraknya < 3 -> lompat 1
        hitung sudah berapa kali lompat sampai kucing tiba di finish

mulai
    input start
    input finish
    count = 0 <- menyimpan jumlah lompatan kucing dari start ke finish
    position = start <- posisi kucing

    loop:
    selama posisi < finish:
        jika posisi + 3 <= finish:
            posisi += 3
        jika tidak:
            posisi += 1

    count += 1
        
    tampilkan hasil count

*/
function solution(start, finish) {
  let count = 0;
  let position = start;

  while (position < finish) {
    if (position + 3 <= finish) {
      position += 3;
    } else {
      position += 1;
    }
    count += 1;
  }

  return count;
}

console.log(solution(1, 5));
