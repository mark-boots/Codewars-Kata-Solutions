/*
Building a wall with bricks
https://www.codewars.com/kata/5c50a0e8cdc6aa29703f6805/train/javascript

Scenario
A construction master applies specific rules when creating walls. But the construction master cannot calculate the exact number of bricks to be spent on the walls.

For this reason, you are expected to write a method that calculates the number of bricks that need to be spent for the wall whose width and height are clear.

Rules
Only 3 kinds of bricks can be used. Large Brick(60 cm), Medium Brick(40 cm) and Small Brick(20cm)
The height of all bricks is 5 cm and wall height is always 5 cm and multiples.
The Wall width is always 60 cm and multiples.
The lowest row should be composed of only large bricks.
After that, the first brick from the right of the next row must be the middle brick, the first brick from the left is the small brick.
Finally, The first brick from the right of the next row must be the small brick, the first brick from the left is the medium brick.
The first row after the series is completed again consists of large bricks and the cycle continues.
The number of bricks used should return to the following format. "21L6M6S"
If number of medium and small bricks is 0, then answer should be the following format. "21L"
Example Wall
wall
Wall height is 45 cm and wall width is 180 cm. There are 21 large bricks. (Yellow bricks) There are 6 medium bricks. (Green bricks) There are 6 small bricks. (Pink bricks)

So answer is "21L6M6S"

*/

const calculateBricksCount=(width,height)=>{
  const cols = width / 60;
  const rows = height / 5;
  const full = Math.ceil(rows / 3);
  const rest = rows - full;
  const large = full * cols + rest * (cols - 1);
  
  return rest ? `${large}L${rest}M${rest}S` : `${large}L`
}