/*
Reverse a Number
https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples

 123 ->  321
-456 -> -654
1000 ->    1
*/

function reverseNumber(n) {
    const rev = [...String(n)];
    if(n < 0) rev.push(rev.splice(0,1)[0])
    return +(rev.reverse().join('')) 
}