/*
Diagonals sum
https://www.codewars.com/kata/5592fc599a7f40adac0000a8

 Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

    Matrix = array of n length whose elements are n length arrays of integers.

3x3 example:

diagonals( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] ); 

returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7
*/

const sum = matrix => matrix.reduce((sum,arr,i)=> sum + arr[i] + arr[arr.length-1-i], 0)