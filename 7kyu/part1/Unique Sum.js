/*
Unique Sum
https://www.codewars.com/kata/56b1eb19247c01493a000065/train/javascript
Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

For example:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> null
*/

uniqueSum=l=>!l.length?null:Array.from(new Set(l)).reduce((a,b)=>a+b,0) 