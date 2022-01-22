/*
Compress sentences
https://www.codewars.com/kata/59de469cfc3c492da80000c5

Your task is to make a program takes in a sentence (without puncuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.
Example

"Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"

becomes

"01234567802856734"
Another example

"the one bumble bee one bumble the bee"

becomes

"01231203"

*/
const compress = s => (x=s.toLowerCase().split` `, l=[...new Set(x)], x.map(v=>l.indexOf(v)).join``)