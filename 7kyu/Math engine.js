/*
Math engine
https://www.codewars.com/kata/587854330594a6fb7e000057

Given an array of integers.

Return a number that is the sum of

    The product of all the non-negative numbers
    The sum of all the negative numbers

Edge cases

    If there are no non-negative numbers, assume the product of them to be 1.
    Similarly, if there are no negative numbers, assume the sum of them to be 0.
    If the array is null, result should be 0.

For example:

mathEngine([1, 2, 3, -4, -5]) // should return -3

*/

const mathEngine = arr => ([pos,neg] = (arr||[0]).reduce((arr,v)=>(v>=0? arr[0]*=v : arr[1]+=v,arr),[1,0]), pos+neg)
//
const mathEngine = arr => (arr||[0]).reduce((arr,v)=>(v>=0? arr[0]*=v : arr[1]+=v,arr),[1,0]).reduce((a,b)=>a+b,0)