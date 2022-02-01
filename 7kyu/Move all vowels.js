/*
Move all vowels
https://www.codewars.com/kata/56bf3287b5106eb10f000899

Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.
Examples

"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

const moveVowel = i => i.replace(/[aeiou]/gi,'')+i.replace(/[^aeiou]/gi,'')

//

const moveVowel=(s,v='',c=s.replace(/[aeuoi]/g,m=>(v+=m,'')))=>c+v
