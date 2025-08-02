/*
Even odd disparity
https://www.codewars.com/kata/59c62f1bdcc40560a2000060

Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

For example:
solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  

Let's now add two letters to the last example:

solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 

The input will be an array of lowercase letters and numbers only.

In some languages (Haskell, C++, and others), input will be an array of strings:

solve ["0","1","2","3","a","b"] = 0 

Good luck!
*/

const solve = a => a.reduce((t,v)=>t + (typeof v == 'number' ? v%2 ? -1 : 1 : 0), 0)