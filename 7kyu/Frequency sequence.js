/*
Frequency sequence
https://www.codewars.com/kata/585a033e3a36cdc50a00011c

Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"

*/

const freqSeq = (str, sep) => [...str].map(c=>[...str].filter(v=>v==c).length).join(sep)
