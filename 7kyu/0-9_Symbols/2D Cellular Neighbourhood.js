/*
2D Cellular Neighbourhood
https://www.codewars.com/kata/5b2e5a02a454c82fb9000048

The neighbourhood of a cell (in a matrix) are cells that are near to it. There are two popular types:

    The Moore neighborhood are eight cells which surround a given cell.
    The Von Neumann neighborhood are four cells which share a border with the given cell.

Task

Given a neighbourhood type ("moore" or "von_neumann"), a 2D matrix (a list of lists) and a pair of coordinates, return the list of neighbours of the given cell.

Notes:

    The order of the elements in the output list is not important.
    If the input indexes are outside the matrix, return an empty list.
    If the the matrix is empty, return an empty list.
    Order of the indices: The first index should be applied for the outer/first matrix layer. The last index for the most inner/last layer. coordinates = (m, n) should be applied like mat[m][n]

Examples

\ n   0    1    2    3    4
m  --------------------------
0  |  0 |  1 |  2 |  3 |  4 |
1  |  5 |  6 |  7 |  8 |  9 |
2  | 10 | 11 | 12 | 13 | 14 |
3  | 15 | 16 | 17 | 18 | 19 |
4  | 20 | 21 | 22 | 23 | 24 |
   --------------------------

get_neighborhood("moore", mat, (1,1)) == [0, 1, 2, 5, 7, 10, 11, 12]
get_neighborhood("moore", mat, (0,0)) == [1, 6, 5]
get_neighborhood("moore", mat, (4,2)) == [21, 16, 17, 18, 23]
get_neighborhood("von_neumann", mat, (1,1)) == [1, 5, 7, 11]
get_neighborhood("von_neumann", mat, (0,0)) == [1, 5]
get_neighborhood("von_neumann", mat, (4,2)) == [21, 17, 23]

*/

const lib = {
    moore:[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],
    von_neumann:[[-1,0],[0,-1],[0,1],[1,0]]
  }
  
  function get_neighbourhood(type, arr, coor){
    
    if(coor[0] < 0 || coor[0] >= arr.length || coor[1] < 0 || coor[1] >= arr[0].length) return []
    return lib[type].map(([row,col])=> {
      if(typeof arr[coor[0]+row] !=='undefined' && typeof arr[coor[1]+col] !== 'undefined'){
        return arr[coor[0]+row][coor[1]+col]
      }
      return ''
    }).filter(v=>typeof v == 'number' )
  }