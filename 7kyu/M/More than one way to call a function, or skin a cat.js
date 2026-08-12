/*
More than one way to call a function, or skin a cat.
https://www.codewars.com/kata/547aadd5b84a1fd66800041e/train/javascript

Write a single function that can be invoked by either

sum(2,3); // 5
// or
sum(2)(3); // 5
Both of these examples should return the sum of the 2 numbers.

*/
const sum = (a, b) => b !== undefined ? a + b : (c) => a + c;