/*
Cat and Mouse - 2D Version
https://www.codewars.com/kata/57f8842367c96a89dc00018e/train/javascript

You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.

Finally, if one of two animals are not present, return "boring without two animals".

Examples
moves = 5

map =
..C......
.........
....m....

returns "Caught!" because the cat can catch the mouse in 4 moves
moves = 5

map =
.C.......
.........
......m..

returns "Escaped!" because the cat cannot catch the mouse in  5 moves

*/

function catMouse(map,moves){
  map = map.split("\n").map(r => r.split(""));
  let cat, mouse;
  for(let y = 0; y < map.length; y++){
    for(let x = 0; x < map[y].length; x++){
      if(map[y][x] == 'C') cat = { y, x }
      if(map[y][x] == 'm') mouse = { y, x }
    }
  }
  if([cat, mouse].includes(undefined)) return 'boring without two animals';
  const distY = Math.abs(cat.y - mouse.y);
  const distX = Math.abs(cat.x - mouse.x);
  
  return distY + distX <= moves ? 'Caught!' : 'Escaped!'
}