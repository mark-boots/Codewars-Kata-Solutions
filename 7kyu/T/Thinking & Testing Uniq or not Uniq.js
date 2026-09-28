/*
Thinking & Testing : Uniq or not Uniq
https://www.codewars.com/kata/56d949281b5fdc7666000004

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

const testit = (a,b) => [...new Set(a),...new Set(b)].sort((a,b)=>a-b)