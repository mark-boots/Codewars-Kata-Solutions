/*
All Star Code Challenge #16
https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript

All Star Code Challenge #16
Write a function that takes a string argument and returns the first letter that appears only once in the string.

ONLY lowercase letters from the english alphabet will be used as input
There will ALWAYS be at least one non-repeating letter in the input string
"aabbccdde" ==> 'e'
"wxyz" ==> 'w'
"testing" ==> 'e';

*/


noRepeat=s=>[...s].find(c=>s.indexOf(c)==s.lastIndexOf(c))