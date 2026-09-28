/*
Crouching Distribution, Hidden Constant
https://www.codewars.com/kata/5a0da79b32b8b98b8d000097/train/javascript

Statistics puzzle
Your function will receive an array of 10000 integer values randomly selected from a uniform distribution (a range of values with equal selection probability). Your function will also receive the minimum and maximum possible values in the range (inclusive). A constant has been added to every value in the array, after it was randomly selected. You must find the constant.

There are no example tests in this kata, so as not to spoil the trick.
Do not worry *too* much about precision. The tests are lenient.

*/

findConstant=(a,l,u)=>a.reduce((x,y)=>x+y)/a.length-(l+u)/2
