/*
Filter Long Words
https://www.codewars.com/kata/5697fb83f41965761f000052

Write a function filterLongWords that takes a string sentence and an integer n.

Return a list of all words that are longer than n.

Example:

filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']

*/
const filterLongWords = (sentence, n) => sentence.split` `.filter(w=>w.length > n)