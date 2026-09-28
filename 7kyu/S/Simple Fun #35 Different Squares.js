/*
Simple Fun #35: Different Squares
https://www.codewars.com/kata/588805ca44c7e8c3a100013c/train/javascript

Task
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example
For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2

2 1
2 2

2 2
2 2

2 2
1 2

2 2
2 3

2 3
2 1
Input/Output
[input] 2D integer array matrix

Constraints:

1 ≤ matrix.length ≤ 100,

1 ≤ matrix[i].length ≤ 100,

0 ≤ matrix[i][j] ≤ 9.

[output] an integer

The number of different 2 × 2 squares in matrix.

*/

function differentSquares(m) {
  const set = new Set();
  for(let y = 1; y < m.length; y++){
    for(let x = 1; x < m[y].length; x++){
      set.add(`${m[y-1][x-1]}-${m[y-1][x]}-${m[y][x-1]}-${m[y][x]}`)
    }
  }
  return set.size
}