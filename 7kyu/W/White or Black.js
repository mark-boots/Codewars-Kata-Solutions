/*
White or Black?
https://www.codewars.com/kata/563319974612f4fa3f0000e0/train/javascript

Complete the function that returns the color of the given square on a normal, 8x8 chess board:

chessboard

Examples
'a', 8  ==>  "white"
'b', 2  ==>  "black"
'f', 5  ==>  "white"

*/

mineColor=(f,r)=>['black','white'][(f.charCodeAt()+r)%2]