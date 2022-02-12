/*
Mispelled word
https://www.codewars.com/kata/5892595f190ca40ad0000095

Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true

It checks if the word2 differs from word1 by only one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ only by one character.
*/
const mispelled=(w1,w2)=>[...w1].reduce((t,v,i)=>t+=w2[i]!==v,0)<2
