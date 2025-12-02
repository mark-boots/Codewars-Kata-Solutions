/*
Geometry Basics: Distance between circles in 2D
https://www.codewars.com/kata/58e3031ce265671f6a000542/train/javascript

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius which is a number.

Write a function calculating distance between Circle a and Circle b.

If they're overlapping or one is completely within the other, just return zero.

Tests round answers to 6 decimal places, so you don't need to round them yourselves.

*/

distanceBetweenCircles=(a,b)=>Math.max(0,Math.hypot(a.center.x-b.center.x,a.center.y-b.center.y)-a.radius-b.radius)
