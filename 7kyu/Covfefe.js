/* 
Covfefe
https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/train/javascript

Covfefe

Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

*/

const covfefe = (str, a="coverage", b="covfefe") => str.indexOf(a) > -1 ? str.replaceAll(a,b) : `${str} ${b}`
