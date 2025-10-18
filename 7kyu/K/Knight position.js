/*
Knight position
https://www.codewars.com/kata/5b5736abf1d553f844000050/train/javascript

Description
Write a function that accepts the current position of a knight in a chess board, it returns the possible positions that it will end up after 1 move. The resulted should be sorted.

Example
"a1" -> ["b3", "c2"]
*/
possiblePositions=p=>[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].map(([x,y])=>(a=p.charCodeAt(0)+x,b=+p[1]+y,a>96&&a<105&&b>0&&b<9)?String.fromCharCode(a)+b:0).filter(Boolean)