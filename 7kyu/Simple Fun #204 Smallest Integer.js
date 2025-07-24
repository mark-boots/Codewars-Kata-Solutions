/*
Simple Fun #204: Smallest Integer
https://www.codewars.com/kata/58fd96a59a9f65c2e900008d/train/javascript

Task
You're given a two-dimensional array of integers matrix. Your task is to determine the smallest non-negative integer that is not present in this array.

Input/Output
[input] 2D integer array matrix
A non-empty rectangular matrix.

1 ≤ matrix.length ≤ 10

1 ≤ matrix[0].length ≤ 10

[output] an integer
The smallest non-negative integer that is not present in matrix.

Example
For

  matrix = [  [0, 2],  [5, 1]] the result should be 3

0,1,2,(3)...5

*/

function smallestInteger(matrix) {
  const sortedUniquePositiveIntegers = [...new Set(matrix.flat()
    .filter((number => number >= 0))
    .sort((a, b) => a - b))]
  return [...sortedUniquePositiveIntegers, 999]
    .findIndex((number, index) => number !== index)
}