/*
Hurry up, the walls are closing in!
https://www.codewars.com/kata/63ab271e96a48e000e577442/train/javascript

Task
"Given a list walls closing in at you, can you make it past those walls without being hit?"
Input
walls: an array of 2-ples, each 2-ple storing non-negative numbers representing the distance of the walls closing in at you from each side (north, south) respectively to the center of the room.
Output
return a boolean indicating whether it is possible to run past the walls without being hit.
Specification
You stand at the west side of a rectangular room, right in the centre of the north and south side
Your goal is to reach the east side of the room
You can only move in a straight line across the room parallel to north and south side
Walls are closing in at you from both the north and south side of the room
Walls stop once they hit the center of the room (distance to north side = distance to south side)
You and the walls move at the same speed
You get hit by a wall if you are on the same tile as a wall
If a wall reaches a tile ahead of you, you cannot make it past that wall anymore
The distances of opposing walls in each 2-ple can differ
Input Constraints
50 tests with 1 <= number of walls <= 4
50 tests with 5 <= number of walls <= 15
50 tests with 16 <= number of walls <= 50
50 tests with 51 <= number of walls <= 100
0 <= starting distance of walls to center of room <= 120
Examples
In the examples below, you start on tile A and want to reach tile B. You have to walk across the center of the room -. Walls W are closing in on you from the north and south.

Walk in the park
walls: [[7, 7], [7, 7], [7, 7], [7, 7]]
expected: true

steps:

start     1       2       3       4       end

 WWWW     WWWW    WWWW    WWWW    WWWW    WWWW
 ....     WWWW    WWWW    WWWW    WWWW    WWWW
 ....     ....    WWWW    WWWW    WWWW    WWWW
 ....     ....    ....    WWWW    WWWW    WWWW
 ....     ....    ....    ....    WWWW    WWWW
 ....     ....    ....    ....    ....    WWWW
 ....     ....    ....    ....    ....    ....
A----B    A...B   .A..B   ..A.B   ...AB   ....A
 ....     ....    ....    ....    ....    ....
 ....     ....    ....    ....    ....    WWWW
 ....     ....    ....    ....    WWWW    WWWW
 ....     ....    ....    WWWW    WWWW    WWWW
 ....     ....    WWWW    WWWW    WWWW    WWWW
 ....     WWWW    WWWW    WWWW    WWWW    WWWW
 WWWW     WWWW    WWWW    WWWW    WWWW    WWWW
Close call
walls: [[2, 2], [3, 3], [4, 4]]
expected: true

steps:

start     1       2       3       end

 WWW      WWW     WWW     WWW     WWW
 WW.      WWW     WWW     WWW     WWW
 W..      WW.     WWW     WWW     WWW
 ...      W..     WW.     WWW     WWW
A---B     A--B    WA.B    WWAB    WWWA
 ...      W..     WW.     WWW     WWW
 W..      WW.     WWW     WWW     WWW
 WW.      WWW     WWW     WWW     WWW
 WWW      WWW     WWW     WWW     WWW
So close .. but we can't make it
walls: [[2, 2], [3, 3], [3, 4]]
expected: false

steps:

start     1       2       end       

 WWW      WWW     WWW     WWW     
 WWW      WWW     WWW     WWW     
 W..      WWW     WWW     WWW     
 ...      W..     WWW     WWW     
A---B     A--B    WA.B    WWXB     <-- X is position the north wall hits us
 ...      W..     WW.     WWW     
 W..      WW.     WWW     WWW     
 WW.      WWW     WWW     WWW     
 WWW      WWW     WWW     WWW     
We stand no chance
walls: [[3, 3], [1, 1], [3, 3]]
expected: false

steps:

start     end                

 WWW      WWW             
 .W.      WWW            
 .W.      .W.                   
A---B     AW-B    <-- A is blocked by walls     
 .W.      .W.            
 .W.      WWW             
 WWW      WWW            
*/

canEscape=w=>w.every((x,i)=>Math.min(...x)-1>i)