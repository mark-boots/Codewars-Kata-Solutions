/*
Evens and Odds
https://www.codewars.com/kata/583ade15666df5a64e000058


This kata is about converting numbers to their binary or hexadecimal representation:

    If a number is even, convert it to binary.
    If a number is odd, convert it to hex.

*/

const evensAndOdds = n => n.toString(n%2?16:2)
//or
const evensAndOdds = n => n.toString(n%2*14+2)