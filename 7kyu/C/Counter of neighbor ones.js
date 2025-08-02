/*
Counter of neighbor ones
https://www.codewars.com/kata/56ec1e8492446a415e000b63

Task

Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array
Example

[1, 1, 1, 0, 1] -> [3,1]
[1, 1, 1, 1, 1] -> [5]
[0, 0, 0, 0, 0] -> []
*/

const onesCounter = input => (input.join('').match(/1+/g)||[]).map(v => v.length)