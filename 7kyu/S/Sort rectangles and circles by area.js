/*
Sort rectangles and circles by area
https://www.codewars.com/kata/5a1de8a580171fb29f00005e/train/javascript

In this kata you will be given an array of the dimensions of rectangles (array with width and length) and circles (radius - just a number). Your task is to sort the objects by their area in ascending order and return the sorted array of areas.

Examples
   [ [4.23, 6.43], 1.23,   3.444,  [1.342, 3.212] ] 
// [ rectangle,   circle,  circle,   rectangle    ]
--->
[ 4.31, 4.75, 27.2, 37.26 ]
 */
sortByArea=a=>a.map(s=>s[0]?s[0]*s[1]:Math.PI*s*s).sort((a,b)=>a-b)

