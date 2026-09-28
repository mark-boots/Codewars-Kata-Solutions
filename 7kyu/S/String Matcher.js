/*
String Matcher
https://www.codewars.com/kata/565ce4ab24ef4aee6a000074

isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).

!Spaces will be ignored but special characters and numbers won't match the string and return false.

For example:
isMatching("email box", "b aIl", "Mo x e") return true
but
isMatching("bouh", "0b", "uh") return false

You need to be able to use all the caracters from the two strings so:
isMatching("kata", "kt", "aaa") return false

*/
const F = s => s.toLowerCase().match(/\S/g).sort().join``
const isMatching = (string, str1, str2) => F(string) == F(str1+str2)