/*
Swap two elements
https://www.codewars.com/kata/5a3f4eace1ce0eeda600003d/train/javascript

Return an array that contains exactly the same elements as the input array, but with elements a and b swapped.

If the array has multiple copies of a, swap only the first one that appears in the array.
If the array has multiple copies of b, swap only the last one that appears in the array.
For example:

([1, 2, 3, 4], 2, 4) -> [1, 4, 3, 2]
([1, 2, 3, 4, 1, 2, 3, 4], 2, 4) -> [1, 4, 3, 4, 1, 2, 3, 2]

*/

function swapTwo(array, a, b) {
  const A = array.indexOf(a), B = array.lastIndexOf(b);
  [array[A], array[B]] = [array[B], array[A]];
  return array
}

//
wapTwo=(x,a,b)=>(A=x.indexOf(a),B=x.lastIndexOf(b),[x[A=x.indexOf(a)],x[B]]=[x[B],x[A]],x)