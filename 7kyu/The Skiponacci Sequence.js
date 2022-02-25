/*
The Skiponacci Sequence
https://www.codewars.com/kata/580777ee2e14accd9f000165

Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including) 1 and 64.


*/

const fibSeq = n => n == 1 ? [1] : [...Array(n-2)].reduce((a,_,i)=>(a.push(a[i]+a[i+1]),a),[1,1])

const skiponacci = n => fibSeq(n).map((v,i)=>i%2?'skip':v).join` `