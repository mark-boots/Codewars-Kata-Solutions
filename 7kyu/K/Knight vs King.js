/*
Knight vs King
https://www.codewars.com/kata/564e1d90c41a8423230000bc/train/javascript

Knight vs King
If you are not familiar with chess game you can learn more Here .

Here is the chess board (rows, denoted by numbers, are called ranks, columns, denoted by a letter, are called files):

alt text

You put a Knight and a King in the board.

Complete the method that tell us which one can capture the other one.

You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.

Return:

"Knight" if the knight is putting the king in check,
"King" if the king is attacking the knight

*/

function knightVsKing([knightY, knightX], [kingY, kingX]) {
  const dy = Math.abs(knightY - kingY);
  const dx = Math.abs(knightX.charCodeAt() - kingX.charCodeAt());
  return dy <= 1 && dx <= 1 ? 'King' : dy * dx == 2 ? 'Knight' : 'None'
}
