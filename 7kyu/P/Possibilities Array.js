/*
Possibilities Array
https://www.codewars.com/kata/59b710ed70a3b7dd8f000027/train/javascript

A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Examples:

[1,2,0,3] => True
# Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

[0,1,2,2,3] => False
# Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

[0] => True
# Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).
*/

isAllPossibilities=x=>x.every((a,i)=>x.includes(i))

isAllPossibilities=x=>x.sort((a,b)=>a-b).every((v,i)=>v==i)

isAllPossibilities=x=>new Set(x).size==x.length&&Math.max(...x)==x.length-1

