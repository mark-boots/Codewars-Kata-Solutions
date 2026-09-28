/*
Finding queens on the board
https://www.codewars.com/kata/64060d8ab2dd990058b7f8ee/train/javascript

Your task is to find the maximum number of queens that can be put on the board so that there would be one single unbeaten square (ie. threatened by no queen on the board).

The Queen can move any distance vertically, horizontally and diagonally.

Input
The queens(n) function takes the size of the chessboard.

n
∈
Z
n∈Z, so it can be negative, and values can go up to 
14
1
1000
141 
1000
 .

Output
The maximum number of queens to leave one single unbeaten square
Return 0 if n is negative.
Examples
n
=
4
→
6
 
q
u
e
e
n
s
n=4→6 queens
n
=
5
→
12
 
q
u
e
e
n
s
n=5→12 queens
Good luck )

*/

queens=n=>n>=3n?(n-2n)*(n-1n):0n