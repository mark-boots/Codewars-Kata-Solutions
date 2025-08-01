/*
Cartesian neighbors
https://www.codewars.com/kata/58989a079c70093f3e00008d/train/javascript

A Cartesian coordinate system is a coordinate system that specifies each point uniquely in a plane by a pair of numerical coordinates, which are the signed distances to the point from two fixed perpendicular directed lines, measured in the same unit of length.

The сoordinates of a point in the grid are written as (x,y). Each point in a coordinate system has eight neighboring points. Provided that the grid step = 1.

It is necessary to write a function that takes a coordinate on the x-axis and y-axis and returns a list of all the neighboring points. Points inside your returned list need not be sorted (any order is valid).

For Example:

* Given x = 2 and y = 2, the function should return [(1,1),(1,2),(1,3),(2,1),(2,3),(3,1),(3,2),(3,3)];
* Given x = 5 and y = 7, the function should return [(6,7),(6,6),(6,8),(4,7),(4,6),(4,8),(5,6),(5,8)].

*/

function cartesianNeighbor(x, y){
  const a = []
  for(let i = -1; i <= 1; i++){
    for(let j = -1; j <= 1; j++){
      if(i !== 0 || j !== 0) a.push([x+i, y+j])
    }
  }
  return a
}