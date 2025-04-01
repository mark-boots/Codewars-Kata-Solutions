/*
No ifs no buts
https://www.codewars.com/kata/592915cc1fad49252f000006/train/javascript

Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"
There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code.

*/

const noIfsNoButs=(a,b)=>`${a} is ${['smaller than','equal to','greater than'][Math.sign(a-b)+1]} ${b}`