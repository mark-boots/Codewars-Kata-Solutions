/*
Convert between radians and degrees
https://www.codewars.com/kata/544e2c60908f2da03600022a/train/javascript

Extend the Math object/module to convert degrees to radians and vice versa. Return the result in string format, rounded to two decimal points when not an integer, otherwise truncate the result (see the examples).

Note that all methods of Math object are static.

Examples
Math.degrees(Math.PI)  -->  "180deg"
Math.radians(180)      -->  "3.14rad"
*/

Math.degrees = radians => Math.round(radians * 180 / Math.PI * 100) / 100 + 'deg'
Math.radians = degrees => Math.round(degrees * Math.PI / 180 * 100) / 100 + 'rad'