/*
Show multiples of 2 numbers within a range
https://www.codewars.com/kata/583989556754d6f4c700018e

Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:

    Do NOT worry about checking zeros or negative values.
    To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation

*/

const GCD = (a,b) => b ? GCD(b,a%b) : a
const LCM = (a,b) => (a*b)/GCD(a,b)

const multiples = (s1,s2,s3,x=LCM(s1,s2)) => [...Array(--s3/x|0)].map((_,i)=>++i*x)