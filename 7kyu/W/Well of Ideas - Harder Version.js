/*
Well of Ideas - Harder Version
https://www.codewars.com/kata/57f22b0f1b5432ff09001cab
*/
const well = x => ['Fail!','Publish!','Publish!'][x.flat().filter(v=>/good/i.test(v)).length]||'I smell a series!'