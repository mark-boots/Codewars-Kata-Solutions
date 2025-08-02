/*
Find the stray number
https://www.codewars.com/kata/57f609022f4d534f05000024

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3


*/

const stray = n => n.sort((a,b)=>a-b).filter(v=>v==n[0]).length == 1 ? n[0] : n[n.length-1]