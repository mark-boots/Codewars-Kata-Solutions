/*
Reverser
https://www.codewars.com/kata/58069e4cf3c13ef3a6000168/

Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys
*/

const reverse = (n, x=0) => n ? reverse(n/10|0, x*10 + n%10) : x