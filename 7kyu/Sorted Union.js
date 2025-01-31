/*
Sorted Union
https://www.codewars.com/kata/5729c30961cecadc4f001878/train/javascript

Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

*/
const uniteUnique = (...a) => [...new Set(a.flat())]