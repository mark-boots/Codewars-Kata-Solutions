/*
Broken Collatz
https://www.codewars.com/kata/57e8c68c97a05990b10000c3/train/javascript

The Collatz sequence is a set of numbers formed by taking an arbitrary positive integer and applying an operation to it: if the number is even, divide it by two, and if it's odd, multiply by three and add one. Repeat this process, taking the result as the input for the next step, until the resulting number is one.

The following function is not working. It's purpose is to return the length of any Collatz sequence. Can you fix it?

*/

collatz=c=n=>n<2?1:1+c(n&1?n*3+1:n/2)