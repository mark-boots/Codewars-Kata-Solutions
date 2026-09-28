/*
Stacked Balls - 2D
https://www.codewars.com/kata/5bb804397274c772b40000ca/train/javascript

Background
I have stacked some pool balls in a triangle.

Like this,

pool balls
Kata Task
Given the number of layers of my stack, what is the total height?

Return the height as multiple of the ball diameter.

Example
The image above shows a stack of 5 layers.

Notes
layers >= 0
approximate answers (within 0.001) are good enough

*/
stackHeight2d=n=>n&&1+--n*Math.sqrt(3)/2
stackHeight2d=n=>n&&--n*0.86602+1