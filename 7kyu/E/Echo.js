/*
Echo
https://www.codewars.com/kata/5c6dc504abcd1628cd174bea

Echo Program

Write an echoProgram function (or echo_program depend on language) that returns your solution source code as a string.
Note:

Function.prototype.toString has been disabled.

*/
function echoProgram(b) {const s = '`function echoProgram(b) {const s = ${String.fromCharCode(39)}${s}${String.fromCharCode(39)};if(b) return s;return ${echoProgram(true)};}`';if(b) return s;return `function echoProgram(b) {const s = ${String.fromCharCode(39)}${s}${String.fromCharCode(39)};if(b) return s;return ${echoProgram(true)};}`;}