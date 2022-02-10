/*
Drawing a Cross!
https://www.codewars.com/kata/5a036ecb2b651d696f00007c

The aim of this kata is to write function drawACross / draw_a_cross which returns a cross shape with 'x' characters on a square grid of size and height of our sole input n. All non-'x' characters in the grid should be filled with a space character (" ").

For example for drawACross(7) / draw_a_cross(7), the function should draw the following grid:

x     x
 x   x 
  x x  
   x   
  x x  
 x   x 
x     x

The arms of the cross must only intersect through one central 'x' character, and start in the corner of the grid, so for even values of n, return "Centered cross not possible!"

If n<3, function should return "Not possible to draw cross for grids less than 3x3!"

*/

const drawACross = n =>
  n < 3 ? "Not possible to draw cross for grids less than 3x3!" :
  !(n%2) ? "Centered cross not possible!" :
  Array.from({length:n},(_,i)=> Array.from({length:n},(_,j)=> j==i || j==n-i-1 ? 'x' : ' ').join``).join`\n`

