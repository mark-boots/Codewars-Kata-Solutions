/*
Put a Letter in a Column
https://www.codewars.com/kata/563d54a7329a7af8f4000059

Create a function that takes index [0, 8] and a character. It returns a string with columns. Put character in column marked with index.

Ex.: index = 2, character = 'B'

| | |B| | | | | | |
 0 1 2 3 4 5 6 7 8

Assume that argument index is integer [0, 8]. Assume that argument character is string with one character.

*/

const buildRowText = (idx, char) => '|'+[...Array(9)].map((_,i)=>i==idx?char:' ').join`|`+'|'
//or
const buildRowText = (i,c) => '|0|1|2|3|4|5|6|7|8|'.replace(/\d/g,m=>m==i?c:' ')