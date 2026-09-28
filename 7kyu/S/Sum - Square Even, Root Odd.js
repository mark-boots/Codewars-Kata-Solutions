/*
Sum - Square Even, Root Odd
https://www.codewars.com/kata/5a4b16435f08299c7000274f

Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!

*/
const sumSquareEvenRootOdd = ns => +ns.reduce((s,v)=>s+(v%2?v**.5:v*v),0).toFixed(2)
//or
const sumSquareEvenRootOdd=n=>+n.reduce((s,v)=>s+v**(v%2?.5:2),0).toFixed(2)