/*
Print a Rectangle Using Asterisks
https://www.codewars.com/kata/5937ae46377144bb2f000029/train/javascript

Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

For example, given width = 3 and height = 3:

***
* *
***
End each line of the string (including the last one) with a carriage return-line feed combination.

Note: You may assume that width and height will always be greater than zero.

*/
function getRectangleString(width, height) {
  return Array.from({length: height}, (_, i) => {
    return width < 2 ? "*\r\n" : "*" + (i==0||i==height-1 ? "*" : " ").repeat(width-2) + "*\r\n" 
  }).join``
}