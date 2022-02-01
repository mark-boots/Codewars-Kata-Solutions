/*
Guess the Sequence
https://www.codewars.com/kata/5b45e4b3f41dd36bf9000090

You have read the title: you must guess a sequence. It will have something to do with the number given.
Example

x = 16

result = [1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8, 9]

*/

const sequence = x => [...Array(x)].map((_,i)=>++i).sort();