/*
Number Manipulation I (Easy)
https://www.codewars.com/kata/5890579a34a7d44f3b00009e

For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000

*/

const manipulate = (num, n=num+'') => +n.slice(0,n.length/2|0).padEnd(n.length,'0')