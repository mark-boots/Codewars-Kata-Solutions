/*
Sum of all arguments
https://www.codewars.com/kata/540c33513b6532cd58000259

Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15

*/

const sum = (...n) => n.reduce((a,b)=>a+b)