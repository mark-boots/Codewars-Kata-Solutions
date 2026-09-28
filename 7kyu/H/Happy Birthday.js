/*
Happy Birthday
https://www.codewars.com/kata/5d65fbdfb96e1800282b5ee0

It's your best friend's birthday! You already bought a box for the present. Now you want to pack the present in the box. You want to decorate the box with a ribbon and a bow.

But how much cm of ribbon do you need?

Write the method wrap that calculates that!

A box has a height, a width and a length (in cm). The ribbon is crossed on the side with the largest area. Opposite this side (also the side with the largest area) the loop is bound, calculate with 20 cm more tape.

  wrap(17,32,11) => 162
  wrap(13,13,13) => 124
  wrap(1,3,1) => 32

Notes:
height, width and length will always be >0

The ribbon and the bow on the present looks like this:
*/

const wrap = (...a) => a.sort((a,b)=>a-b)[0]*4 + (a[1]+a[2])*2 + 20

[ 'f','k','b','c','i','d','e','a','j','h','f','k','b','c','i','d','e','a','k','h','f','k','i','c','d','f','e','a','f','e' ]

[ 'f','k','b','c','i','d','e','a','j','h','f','k','b','c','i','d','e','a','h','f','k','c','i','d','e','a','f','k','e','f' ]

[ 'f','k','b','c','i','d','e','a','f','a','e','a','e','b','f','c','c','d','j','e','f','i','k','f','h','d','h','i','k','k ']