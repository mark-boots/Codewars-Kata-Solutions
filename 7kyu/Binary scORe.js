/*
Binary scORe
https://www.codewars.com/kata/56cafdabc8cfcc3ad4000a2b/train/javascript

Objective
Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

Write a function that takes n and finds it's scORe.

n	scORe n
0	0
1	1
49	63
1000000	1048575

*/

score=n=>2**Math.ceil(Math.log2(n+1))-1