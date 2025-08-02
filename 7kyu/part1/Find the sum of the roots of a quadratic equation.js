/*
Find the sum of the roots of a quadratic equation
https://www.codewars.com/kata/57d448c6ba30875437000138

Implement function which will return sum of roots of a quadratic equation rounded to 2 decimal places, if there are any possible roots, else return None/null/nil/nothing. If you use discriminant,when discriminant = 0, x1 = x2 = root => return sum of both roots. There will always be valid arguments. 

*/

const roots = (a,b,c)=> b*b-4*a*c < 0 ? null: +(-b/a).toFixed(2)