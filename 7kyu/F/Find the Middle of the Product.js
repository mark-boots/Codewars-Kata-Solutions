/*
Find the Middle of the Product
https://www.codewars.com/kata/5ac54bcbb925d9b437000001

Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits. In this case and the case for any non-strings, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56

NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1

*/

function findMiddle(str){
    const nums = str.match(/\d/g);
    const product = nums.reduce((p, v) => p * v);
    const str2 = product.toString();
    const mid = str2.substr(Math.ceil(str2.length / 2 - 1), str2.length % 2 === 0 ? 2 : 1)
    const num = parseInt(mid);
    return num;
}

/*
m=s=>s.substr(s.length-1>>>1,(~s.length&1)+1)
findMiddle=s=>typeof s=='string'?+(m(''+((s.match(/\d/g)||[-1]).reduce((a,b)=>a*b)))):-1
*/