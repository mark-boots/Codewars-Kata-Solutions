/*
Area of a Polygon (Easy)
https://www.codewars.com/kata/574758e396b130b63e00069b/train/javascript

Write the function polygonArea(A,B,C,D) that finds the area of polygons of this type:

alt text

Assume D always equals B/2.
Assume the angles formed by AB and BC are right angles.

*/

polygonArea=(A,B,C)=>B*(A+C)/2

polygonArea=(A,B,C,D)=>D*(A+C)