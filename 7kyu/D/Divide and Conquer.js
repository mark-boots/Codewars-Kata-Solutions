/*
Divide and Conquer
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers. 
https://www.codewars.com/kata/57eaec5608fed543d6000021

Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

*/
const divCon = x => x.reduce((s,v)=>s+=(typeof v)[0]=='n'?v:-v,0)
//or
const divCon = x => x.reduce((s,v)=>s+=v===+v?v:-v,0)