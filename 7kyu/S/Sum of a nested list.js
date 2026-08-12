/*
Sum of a nested list
https://www.codewars.com/kata/5a15a4db06d5b6d33c000018/train/javascript

mplement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10
*/
sumNested=a=>a.reduce((t,v)=>t+(v.at?sumNested(v):v),0)
sumNested=a=>a.flat(99).reduce((a,b)=>a+b,0)
sumNested=a=>eval(a.flat(99).join`+`)||0