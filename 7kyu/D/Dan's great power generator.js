/*
Dan's great power generator
https://www.codewars.com/kata/582c42e0f000e54a7d000086

Dan likes to find the nth power of number. But he doesn't like it when the result is odd!

Return the nth power of each number, unless the result is odd, in which case round the result to the nearest 10.

Eg. if number = 7, and power = 2, result = 50.

*/

function danspower(num, power, p = num**power) {
    return p%2? Math.round(p/10) * 10 : p
}
//danspower=(n,p,x=n**p)=>x%2?Math.round(x/10)*10:x  