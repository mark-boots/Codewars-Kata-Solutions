/*
Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark 
https://www.codewars.com/kata/57fafb6d2b5314c839000195

Description:

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
Examples

remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"


*/
const remove = string => string.split` `.filter(v=>(v.match(/!/g)||[]).length !== 1).join` `