/*
Ten Green Bottles
https://www.codewars.com/kata/5838e2978bbc04b7cd000008/train/javascript

Who knows the nursery rhyme Ten Green Bottles?

Lyrics:

Ten green bottles hanging on the wall,
Ten green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be nine green bottles hanging on the wall.

Nine green bottles hanging on the wall,
Nine green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be eight green bottles hanging on the wall. 

Eight green bottles hanging on the wall...
Seven green bottles hanging on the wall...
...

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.
Task
Write some amazing code to reproduce the above lyrics starting from n green bottles!
*/

const N = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

function tenGreenBottles(n) {
  let verse = '';
  while(n > 0){
    let l1 = `${N[n]} green bottle${n > 1 ? 's' : ''} hanging on the wall,\n`.repeat(2);
    let l2 = `${n == 1 ? 'If that': 'And if'} one green bottle should accidentally fall,\n`;
    let l3 = `There'll be ${N[n-1].toLowerCase()} green bottle${n-1 !== 1 ? 's': ''} hanging on the wall.\n`;
    verse += l1 + l2 + l3 + (n > 1 ? '\n' : '');
    n--
  }
  return verse
}  