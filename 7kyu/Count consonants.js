/*
Count consonants
https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

*/

function consonantCount(str) {
    return (str.match(/['bcdfghjklmnpqrstvwxyz']/gi)||[]).length;
  }