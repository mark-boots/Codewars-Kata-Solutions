/*
The alphabet product
https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407/train/javascript

I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
*/

function alphabet(ns) {
  ns.sort((a,b)=>a-b)
  return ns[7] / ns[ns[0] * ns[1] == ns[2] ? 3 : 2]
}

const alphabet=x=>x.sort((a,b)=>a-b)[7]/x[x[0]*x[1]==x[2]?3:2]