/*
Sum of digits
https://www.codewars.com/kata/59cf805aaeb28438fe00001c

It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

Digits can be a number, a string, or undefined. In case of undefined return an empty string ''.

To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.

*/

const sum = (digits, d=[...new String(digits)]) => 
  digits >= 0 ? `${d.join(' + ')} = ${d.reduce((a,b)=>+b+a,0)}` : ''