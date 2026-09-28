/*
The average length
https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1

*/

function averageLength(array) { 
  const avg = Math.round(array.reduce((s, v) => s + v.length, 0) / array.length);
  return array.map(v => v[0].repeat(avg));
}