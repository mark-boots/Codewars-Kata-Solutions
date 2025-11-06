/*
TIY-FizzBuzz
https://www.codewars.com/kata/5889177bf148eddd150002cc/train/javascript

In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
Ready?

*/
tiyFizzBuzz=s=>s.replace(/./g,c=>/[A-Z]/.test(c)?/[AEIOU]/.test(c)?'Iron Yard':'Iron':/[aeiou]/.test(c)?'Yard':c)