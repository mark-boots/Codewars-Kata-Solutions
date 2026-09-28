/*
Round to nearest 0 or 5
https://www.codewars.com/kata/582f52208278c6be55000067/train/javascript

iven an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.

For example, given the following array:

[34.5, 56.2, 11, 13]
should return

[35, 55, 10, 15]

*/

roundToFive=N=>N.map(n=>Math.round(n/5)*5)

roundToFive=N=>N.map(n=>~~((n+2.5)/5)*5)