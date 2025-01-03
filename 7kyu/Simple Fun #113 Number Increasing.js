/*
Simple Fun #113: Number Increasing
https://www.codewars.com/kata/589d1e88e8afb7a85e00004e/train/javascript

Task
Initially a number 1 is written on a board. It is possible to do the following operations with it:

 multiply the number by 3; increase the number by 5. Your task is to determine that using this two operations step by step, is it possible to obtain number n?

Example
For n = 1, the result should be true.

1 = 1

For n = 2, the result should be false.

For n = 3, the result should be true.

1 x 3 = 3

For n = 4, the result should be false.

For n = 5, the result should be false.

For n = 6, the result should be true.

1 + 5 = 6

For n = 18, the result should be true.

1 + 5 = 6  --> 6 x 3 = 18

For n = 32, the result should be true.

1 x 3 x 3 x 3 = 27  --> 27 + 5 = 32

For n = 100, the result should be false.

For n = 101, the result should be true.

1 + 5 + 5 + 5 ... +5 = 101

Input / Output
[input] integer n
positive integer, n ≤ 100000

[output] a boolean value
true if N can be obtained using given operations, false otherwise.

*/
function numberIncreasing(n) {
  const visited = new Set();
  const queue = [1];

  while (queue.length > 0) {
      const current = queue.shift();
      if (current === n) return true;
      if (current > n || visited.has(current)) continue;
      visited.add(current);
      queue.push(current * 3);
      queue.push(current + 5);
  }
  return false;
}
