/*
Euclidean distance in n dimensions
https://www.codewars.com/kata/595877be60d17855980013d3/train/javascript
Implement a function to calculate the distance between two points in n-dimensional space. The two points will be passed to your function as arrays of the same length.

Round your answers to two decimal places.
*/

euclideanDistance=(a,b)=>+Math.hypot(...a.map((v,i)=>v-b[i])).toFixed(2)