/*
Pisano Period
https://www.codewars.com/kata/5f1360c4bc96870019803ae2/train/javascript

The Fibonacci numbers are the numbers in the integer sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, ..
They are defined by the recurrence relation

Fib(0) = 0
Fib(1) = 1
Fib(i) = Fib(i-1) + Fib(i-2)
For any integer n, the sequence of Fibonacci numbers Fib(i) taken modulo n is periodic. The Pisano period, denoted Pisano(n), is the length of the period of this sequence.

For example, the sequence of Fibonacci numbers modulo 3 begins:

0, 1, 1, 2, 0, 2, 2, 1, 0, 1, 1, 2, 0, 2, 2, 1, 0, 1, 1, 2, 0, 2, 2, 1, ...
This sequence has period 8. The repeating pattern is 0, 1, 1, 2, 0, 2, 2, 1, so Pisano(3) = 8

Your task is to write the Pisano function that takes an integer n and outputs the length of pisano period.

*/

function pisano(n) {
  let prev = 0, curr = 1;
  for (let i = 0; i < n * n; i++) {
    let temp = (prev + curr) % n;
    prev = curr;
    curr = temp;

    if (prev === 0 && curr === 1) {
      return i + 1; // The length of the period
    }
  }
}
