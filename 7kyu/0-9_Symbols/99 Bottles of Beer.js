/*
99 Bottles of Beer
https://www.codewars.com/kata/52a723508a4d96c6c90005ba

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters
Lyrics

    99 bottles of beer on the wall, 99 bottles of beer.
    Take one down and pass it around, 98 bottles of beer on the wall.

    98 bottles of beer on the wall, 98 bottles of beer.
    Take one down and pass it around, 97 bottles of beer on the wall.

    ...and so on...

    3 bottles of beer on the wall, 3 bottles of beer.
    Take one down and pass it around, 2 bottles of beer on the wall.

    2 bottles of beer on the wall, 2 bottles of beer.
    Take one down and pass it around, 1 bottle of beer on the wall.

    1 bottle of beer on the wall, 1 bottle of beer.
    Take one down and pass it around, no more bottles of beer on the wall.

    No more bottles of beer on the wall, no more bottles of beer.
    Go to the store and buy some more, 99 bottles of beer on the wall.

Example

[ "99 bottles of beer on the wall, 99 bottles of beer.",
  "Take one down and pass it around, 98 bottles of beer on the wall.",
  "98 bottles of beer on the wall, 98 bottles of beer.",

  ...and so on...

  "3 bottles of beer on the wall, 3 bottles of beer.",
  "Take one down and pass it around, 2 bottles of beer on the wall.",
  "2 bottles of beer on the wall, 2 bottles of beer.",
  "Take one down and pass it around, 1 bottle of beer on the wall.",
  "1 bottle of beer on the wall, 1 bottle of beer.",
  "Take one down and pass it around, no more bottles of beer on the wall.",
  "No more bottles of beer on the wall, no more bottles of beer.",
  "Go to the store and buy some more, 99 bottles of beer on the wall." ]

*/


const L=s=>s.toLowerCase(),
      b=n=>(x=n==-1?99:n,`${x==0?'No more':x} bottle${x==1?'':'s'} of beer`),
      a=n=>n<0?'Go to the store and buy some more':'Take one down and pass it around',
      w='on the wall'

const sing = () => [...Array(200)].map((_,i)=>(n=99-(i-i%2)/2,i%2?`${a(--n)}, ${L(b(n))} ${w}.`:`${b(n)} ${w}, ${L(b(n))}.`))
