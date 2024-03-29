/*
Binary sXORe
https://www.codewars.com/kata/56d3e702fc231fdf72001779

Objective
Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

Write a function that takes n and returns it's sXORe.

Examples
n	sXORe n
0	0
1	1
50	51
1000000	1000000

*/

const sxore = function(n){ 
    return n % 4 === 0 ? n :
           n % 4 === 1 ? 1 :
           n % 4 === 2 ? n + 1 :
           0
}

// sxore=n=>[n,1,n+1,0][n%4]