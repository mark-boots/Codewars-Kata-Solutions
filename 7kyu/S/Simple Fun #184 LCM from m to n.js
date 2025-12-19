/*
Simple Fun #184: LCM from m to n
https://www.codewars.com/kata/58bcdc65f6d3b11fce000045/train/javascript

Task
Your task is to find the smallest number which is evenly divided by all numbers between m and n (both inclusive).

Example
For m = 1, n = 2, the output should be 2.

For m = 2, n = 3, the output should be 6.

For m = 3, n = 2, the output should be 6 too.

For m = 1, n = 10, the output should be 2520.

Input/Output
[input] integer m
1 ≤ m ≤ 25

[input] integer n
1 ≤ n ≤ 25

[output] an integer

*/
mnLCM=(m,n,s=Math.min(m,n),l=Math.max(m,n),g=(a,b)=>b?g(b,a%b):a,r=(a,i)=>i>l?a:r(a*i/g(a,i),i+1),)=>r(s,s+1)