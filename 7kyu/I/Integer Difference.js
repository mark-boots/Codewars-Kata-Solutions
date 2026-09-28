/*
Integer Difference
https://www.codewars.com/kata/57741d8f10a0a66915000001

Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)


*/

const intDiff = (arr,n) => arr.reduce((pre,cur,idx) => pre + arr.slice(++idx).filter(x => Math.abs(x-cur) == n).length, 0)