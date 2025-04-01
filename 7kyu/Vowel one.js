/*
Vowel one
https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript

vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

*/

const vowelOne = s => s.replace(/./g,c=>+/[aeiou]/i.test(c))
//
vowelOne=s=>s.replace(/([aeiou])|./gi,(_,v)=>+!!v)