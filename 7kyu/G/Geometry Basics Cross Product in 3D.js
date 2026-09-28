/*
Geometry Basics: Cross Product in 3D
https://www.codewars.com/kata/58e440d8acfd3edfb2000aee/train/javascript

This series of katas will introduce you to basics of doing geometry with computers.

Vector objects (struct in C) have x, y, and z attributes.

Write a function calculating the cross product of Vector a and Vector b, the result should be a Vector object.
*/

crossProduct=({x,y,z},{x:X,y:Y,z:Z})=>new Vector(y*Z-z*Y,z*X-x*Z,x*Y-y*X)