/*
What comes after? 
https://www.codewars.com/kata/590f5b4a7bbb3e246000007d

You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"

Return an empty string if there are no instances of letter in the given string.

Adapted from: Ruby Kickstart

*/

const comes_after = (str,l) => (str.match(new RegExp(`(?<=${l})[^0-9._! ]`,'gi'))||[]).join``