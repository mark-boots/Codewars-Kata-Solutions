/*
Thinking & Testing : Sport Star
https://www.codewars.com/kata/56dd927e4c9055f8470013a5

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

const L = {'_':['run','x'],'|':['jump','/']}
const testit = (act,s) => s.replace(/./g, (m, i) => act[i] == L[m][0] ? m : L[m][1])