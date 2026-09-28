/*
Battle of the characters (Medium)
https://www.codewars.com/kata/595e9f258b763bc2d2000032

Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.
Rules

    Each character has its own power:

      A = 1, B = 2, ... Y = 25, Z = 26
      a = 0.5, b = 1, ... y = 12.5, z = 13

    Only alphabetical characters can and will participate in a battle.
    Only two groups to a fight.
    Group whose total power (a + B + c + ...) is bigger wins.
    If the powers are equal, it's a tie.

Examples

"One", "Two"  -->  "Two"
"ONE", "NEO"  -->  "Tie!"

*/

const cScore = c => (cc = c.charCodeAt(), cc % 32 / (cc > 96 ? 2 : 1))
const wScore = s => [...s].reduce((a,b) => a + cScore(b), 0)

const battle = (x,y) => [y,'Tie!',x][Math.sign(wScore(x) - wScore(y)) + 1]