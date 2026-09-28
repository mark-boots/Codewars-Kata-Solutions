/*
Geometry Basics: Distance between points in 3D
https://www.codewars.com/kata/58dceee2c9613aacb40000b9

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y, and z attributes. For Haskell there are Point data types described with record syntax with fields x, y, and z.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places. Tests in Haskell will not round.

*/

function distanceBetweenPoints(a,b){
    return Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2 + (a.z-b.z)**2);
}

//distanceBetweenPoints=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z)