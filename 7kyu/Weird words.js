/*
Weird words
https://www.codewars.com/kata/57b2020eb69bfcbf64000375

In this kata you will have to change every letter in a given string to the next letter in the alphabet. You will write a function nextLetter (Javascript) / next_letter (Python, Ruby) to do this. The function will take a single parameter s (string).

Examples:

"Hello" --> "Ifmmp"

"What is your name?" --> "Xibu jt zpvs obnf?"

"zoo" --> "app"

"zzZAaa" --> "aaABbb"

Note: spaces and special characters should remain the same. Capital letters should transfer in the same way but remain capitilized.

*/

const nextLetter = s => s.replace(/[a-z]/gi,m=> String.fromCharCode(m.charCodeAt()+1-26*'zZ'.includes(m)))