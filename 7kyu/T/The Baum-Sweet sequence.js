/*
The Baum-Sweet sequence
https://www.codewars.com/kata/5d2659626c7aec0022cb8006/train/javascript

Wikipedia: The Baum–Sweet sequence is an infinite automatic sequence of 0s and 1s defined by the rule:

bn = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
bn = 0 otherwise;

for n ≥ 0.

Define a generator function baumSweet that sequentially generates the values of this sequence.

It will be tested for up to 1 000 000 values.

Note that the binary representation of 0 used here is not 0 but the empty string ( which does not contain any blocks of consecutive 0s ).

*/

function* baumSweet() {
  for (let n = 0; ; n++) {
      yield n === 0 || n.toString(2).split('1').every(block => block.length % 2 === 0) ? 1 : 0;
  }
}