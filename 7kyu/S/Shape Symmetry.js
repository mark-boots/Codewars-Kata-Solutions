/*
Shape Symmetry
https://www.codewars.com/kata/57c13e724677bbc5fc000a0b

Following on from Points of Reflection, given a number of points and a single midpoint, a 2D shape can be inferred.

Task:

You will be given two inputs. The first will be a two-dimensional sequence in which the inner sequences contain two elements representing partial coordinates of a 2D shape. The second input will be a two-element sequence representing the shape's mid-point. Using the existing coordinates and the mid-point, return the complete shape as a two-dimensional array.

The output sorting must be the original points of shape followed by the reflected points in the same order than the points in shape.

Oh and, nice try cheaters! You will now have to refactor. You may no longer modify the test inputs ;) Thanks to FArekkusu and hobovsky for their contributions to improving this kata.

*/

const symmetricShape = (s,q) => s.concat(s.map(p => p.map((c,i) => q[i] * 2 - c)))