/*
How many are smaller than me?
https://www.codewars.com/kata/56a1c074f87bc2201200002e

Write

function smaller(arr)

that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]

If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?

*/

const smaller = nums => nums.map((v,i,a)=>a.slice(i+1).filter(x=>x<v).length)
//
const smaller = n => n.map((a,i)=>n.filter((b,j)=>j>i&&b<a).length)