/*
Javascript Mathematician
https://www.codewars.com/kata/55c211cce1ef691d9b000061/train/javascript

You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1)       // should return 2
calculate(1,1)(1)     // should return 3
calculate(1,1)(1,-1)  // should return 2
calculate(2,4)(3,7,1) // should return 17

*/

const calculate=(...a)=>(...b)=>a.concat(b).reduce((s,v)=>s+v)