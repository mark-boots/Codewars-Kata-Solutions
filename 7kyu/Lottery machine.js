/*
Lottery machine
https://www.codewars.com/kata/5832db03d5bafb7d96000107

Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

Examples
"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5"

*/
function lottery(str){
    return [...new Set(str.match(/\d/g))].join`` || 'One more run!'
 }
//lottery=s=>[...new Set(s.match(/\d/g))].join``||'One more run!'