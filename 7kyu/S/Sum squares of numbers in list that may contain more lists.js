/*
Sum squares of numbers in list that may contain more lists
https://www.codewars.com/kata/57882daf90b2f375280000ad/train/javascript

Write a function that sums squares of numbers in list that may contain more lists
Example:

var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400
Note: your solution must NOT modify the original list
*/
SumSquares=l=>l.flat(Infinity).reduce((s,v)=>s+v*v,0)