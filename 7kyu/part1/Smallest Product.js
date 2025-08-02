/*
Smallest Product
https://www.codewars.com/kata/5b6b128783d648c4c4000129

Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.
Example

input = [
  [1, 5],
  [2],
  [-1, -3]
]

result = 2


*/

const smallestProduct = arr => Math.min(...arr.map(a=>a.reduce((pre,cur)=>pre*cur,1)))
 