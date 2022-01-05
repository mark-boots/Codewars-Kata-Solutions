/*
Construct a bit vector set
https://www.codewars.com/kata/52f5424d0531259cfc000d04

Task

Write a function which accepts a sequence of unique integers as argument and returns a 32-bit integer such that the integer, in its binary representation has 1 at only those indexes (counted from right) which are in the sequence.
Examples

sortByBit([0, 1]) // Returns integer 3
sortByBit([1, 2, 0, 4]) // Returns integer 23

FAQ: The function name contains sort as it simulates radix sort.

*/

const sortByBit = arr => arr.reduce((acc, el) => acc + 2**el, 0)