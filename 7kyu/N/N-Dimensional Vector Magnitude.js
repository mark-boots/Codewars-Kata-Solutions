/*
N-Dimensional Vector Magnitude
https://www.codewars.com/kata/5806c2f897dba05dd900004c/train/javascript

Return the magnitude of a vector, given as an array of its component values.

The vector (2, 3, 5) would be represented as an array containing three values at indices 0, 1 and 2 respectively.
The array will always contain at least 2 and at most 100 elements (2 ≤ vector.Length ≤ 100), each of which will be within the range [-100, 100].
An array containing four elements represents a vector in 4D space.

*/

magnitude=v=>Math.sqrt(v.reduce((s,v)=>s+v*v,0))

magnitude=v=>Math.hypot(...v)