/*
Check if a number is a part of an arbitrary fibonacci sequence
https://www.codewars.com/kata/56dc83840a10fee472000ca1

You will be given a function, isFibo, which will take three arguments: a, b and f.

a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.

Good luck, muh fellow coding warrior.

*/

const isFibo = (a,b,f) => a+b==f ? true : a+b < f ? isFibo(b,a+b,f) : false