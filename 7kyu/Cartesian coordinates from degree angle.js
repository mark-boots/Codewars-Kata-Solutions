/*
Cartesian coordinates from degree angle
https://www.codewars.com/kata/555f43d8140a6df1dd00012b

Write a simple function that takes polar coordinates (an angle in degrees and a radius) and returns the equivalent cartesian coordinates (rounded to 10 places).

For example:

coordinates(90,1)
=> (0.0, 1.0)

coordinates(45, 1)
=> (0.7071067812, 0.7071067812)


*/

const coordinates = (d,r) => [r*Math.cos(θ=d*Math.PI/180),r*Math.sin(θ)].map(v=>+(v.toFixed(10)))