// Codewars Challenge 2024
// 282/366
// https://www.codewars.com/kata/538835ae443aae6e03000547/train/javascript

/* 
Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6

----------------------------------------------------------

You should implement a function add which:

receives an argument n
returns a function f which:
receives an argument m
returns the sum n + m
Expanding the example from the description:

f = add(5)
f(8) == 13      # 5 + 8
f(-11) == -6    # 5 + (-11)

f = add(31)
f(6) == 37        # 31 + 6
f(-100) == -69    # 31 + (-100)

*/

// function currying

function add(n) {
  return function (a) {
    return n + a;
  };
}

console.log(add(3)(1));
console.log(add(1)(-5));
console.log(add(3)(20));
console.log(add(-224)(61));
