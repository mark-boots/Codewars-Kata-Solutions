/*
Simple Fun #62: Draw Rectangle
https://www.codewars.com/kata/5889ae4f7af7f99a9a000019/train/javascript

Task
You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. Your current goal is to support rectangle x1 y1 x2 y2 operation, which draws a rectangle that has an upper left corner at (x1, y1) and a lower right corner at (x2, y2). Here the x-axis points from left to right, and the y-axis points from top to bottom.

Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.

Example
For

canvas = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
and rectangle = [1, 1, 4, 3]
the output should be

[['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
 ['a', '*', '-', '-', '*', 'a', 'a', 'a'],
 ['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
 ['b', '*', '-', '-', '*', 'b', 'b', 'b'],
 ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
Note that rectangle sides are depicted as -s and |s, asterisks (*) stand for its corners and all of the other "pixels" remain the same. Color in the example is used only for illustration.

Input/Output
[input] 2D string array canvas

A non-empty rectangular matrix of characters.

Constraints: 2 ≤ canvas.length ≤ 10, 2 ≤ canvas[0].length ≤ 10.

[input] integer array rectangle

Array of four integers - [x1, y1, x2, y2].

Constraints: 0 ≤ x1 < x2 < canvas[i].length, 0 ≤ y1 < y2 < canvas.length.

[output] 2D string array

*/

function drawRectangle(canvas, [x1, y1, x2, y2]) {
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      if ((y === y1 || y === y2) && (x === x1 || x === x2)) canvas[y][x] = '*';
      else if (y === y1 || y === y2) canvas[y][x] = '-';
      else if (x === x1 || x === x2) canvas[y][x] = '|';
    }
  }
  return canvas;
}