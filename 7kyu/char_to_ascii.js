/*
char_to_ascii
https://www.codewars.com/kata/55e9529cbdc3b29d8c000016/train/javascript

Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

*/

function charToAscii(string){
    if(!string.length) return null
    return string.match(/[a-z]/gi).reduce((o,c)=>(o[c]=c.charCodeAt(),o),{})
}