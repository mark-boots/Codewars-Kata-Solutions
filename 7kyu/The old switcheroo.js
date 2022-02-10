/*
The old switcheroo

Write a function

vowel2index(str)

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''

Your function should be case insensitive to the vowels.
*/

const vowel2index = s => s.replace(/./g,(m,i)=>/[aeoiu]/i.test(m)?++i:m)

//or
const vowel2index = s => s.replace(/[aeoiu]/gi,(_,i)=>++i)