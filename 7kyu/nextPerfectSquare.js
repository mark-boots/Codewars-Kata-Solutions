/*
nextPerfectSquare
https://www.codewars.com/kata/599f403119afacf9f1000051

Write a function name nextPerfectSquare / next_perfect_square that returns the first perfect square that is greater than its integer argument. A perfect square is a integer that is equal to some integer squared. For example 16 is a perfect square because 16=4*4.

example

n   next perfect square

6    9
36   49 
0    1
-5   0 

caution! the largest number tested is closer to Number.MAX_SAFE_INTEGER

*/
const nextPerfectSquare = n => n<0 ? 0 : Math.floor(n**.5+1)**2