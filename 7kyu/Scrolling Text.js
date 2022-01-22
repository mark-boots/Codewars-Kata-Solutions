/*
Scrolling Text
https://www.codewars.com/kata/5a995c2aba1bb57f660001fd

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
Example

scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]

Good luck!

*/

const scrollingText = t => Array.from({length: t.length},(_,i)=> (t.slice(i) + t.slice(0,i)).toUpperCase())