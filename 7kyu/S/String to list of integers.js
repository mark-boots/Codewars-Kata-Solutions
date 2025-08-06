/*
String to list of integers.
https://www.codewars.com/kata/5727868888095bdf5c001d3d/train/javascript
Given a string containing a list of integers separated by commas, write the function that takes said string and returns a new array / list containing all integers present in the string, preserving the order.

Please note that there can be one or more consecutive commas whithout numbers, like so:

"-1,-2,,,,,,3,4,5,,6"
For example

"-1,-2,3,-4,-5"   --> [-1,-2,3,-4,-5]
"1,2,3,,,4,,5,,," --> [1,2,3,4,5]
",,,,,,,"         --> []
*/
stringToIntArray=s=>(s.match(/-?\d+/g)||[]).map(Number)