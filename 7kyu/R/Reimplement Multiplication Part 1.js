/*
Reimplement Multiplication Part 1
https://www.codewars.com/kata/563cc8c1a3895d7d30000049/train/javascript

Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.

You should only use the + and/or - operators. Using * is cheating!

You can do this iteratively or recursively.

*/
mul=(a,b)=>b?a+mul(a,--b):0
mul=(a,b)=>a/(1/b)+.5|0