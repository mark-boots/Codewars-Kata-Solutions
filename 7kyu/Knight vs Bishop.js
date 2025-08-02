/*
Knight vs Bishop
https://www.codewars.com/kata/564e21ba7cd824845b000097/train/javascript

Knight vs Bishop
If you are not familiar with chess game you can learn more here.

You will be provided with two object arrays. Each of them contains an integer and a string which represent the positions of the pieces on the chess board (e.g. [4, "C"] and [6, "D"]).

Implement a function which returns:

"Knight" if the knight can capture the bishop
"Bishop" if the bishop can capture the knight
"None" if both pieces are safe
Check the test cases and Happy coding :)

*/

function knightVsBishop(k, b) {
  const x = l => l.charCodeAt(0) - 64; 
  
  const r = Math.abs(k[0] - b[0]);
  const c = Math.abs(x(k[1]) - x(b[1]));
  
  return r * c == 2 ? 'Knight' : r == c ? 'Bishop' : 'None'
  
}