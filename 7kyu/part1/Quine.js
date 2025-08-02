/*
Quine
https://www.codewars.com/kata/582949352c5d0a3dee000092

Just write quine function.

https://en.wikipedia.org/wiki/Quine_(computing)
*/

function quine() {
    return quine.toString()
}