/*
Stacked Balls - 3D (triangle base)
https://www.codewars.com/kata/5bbad1082ce5333f8b000006/train/javascript

Background
I have stacked some cannon balls in a triangle-based pyramid.

Like this,

cannon balls triangle base
Kata Task
Given the number of layers of my stack, what is the total height?

Return the height as multiple of the ball diameter.

Example
The image above shows a stack of 3 layers.

Notes
layers >= 0
approximate answers (within 0.001) are good enough

*/

stackHeight3d=l=>l&&--l*.8165+1