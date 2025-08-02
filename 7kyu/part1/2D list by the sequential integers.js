/*
2D list by the sequential integers
https://www.codewars.com/kata/5a8897d4ba1bb5f266000057

Make the 2D list by the sequential integers started by the head number.

See the example test cases for the expected output.

Note:

-10**20 < the head number <10**20
1 <=  the number of rows <= 1000
0 <=  the number of columms <= 1000

*/

function make2dList(head, row, col) {
    return Array.from({length: row}, (_, r) => {
      return Array.from({length: col}, (_,c) => {
        return head + r * col + c
      })
    })
}

// make2dList=(h,r,c)=>Array.from({length:r},(_,i)=>Array.from({length:c},(_,j)=>h+i*c+j))
