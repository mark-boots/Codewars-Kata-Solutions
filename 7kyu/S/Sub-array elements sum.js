/*
Sub-array elements sum
https://www.codewars.com/kata/5b5e0ef007a26632c400002a/train/javascript

Given an array (or list or vector) of arrays (or, guess what, lists or vectors) of integers, your goal is to return the sum of a specific set of numbers, starting with elements whose position is equal to the main array length and going down by one at each step.

Say for example the parent array (etc, etc) has 3 sub-arrays inside: you should consider the third element of the first sub-array, the second of the second array and the first element in the third one: [[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]] would have you considering 1 for [3, 2, 1, 0], 6 for [4, 6, 5, 3, 2] and 9 for [9, 8, 7, 4], which sums up to 16.

One small note is that not always each sub-array will have enough elements, in which case you should then use a default value (if provided) or 0 (if not provided), as shown in the test cases.


*/

elementsSum=(a,d=0)=>a.reduce((s,v,i)=>(x=v[a.length-1-i],s+(x==null?d:x)),0)
elementsSum=(a,b=0,c=a.length)=>a.reduce((d,e)=>d+(--c>=e.length?b:e[c]),0)
