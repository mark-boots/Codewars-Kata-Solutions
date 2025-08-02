/*
Convert Integer to Binary
https://www.codewars.com/kata/55606aeebf1f0305f900006f

Convert integers to binary as simple as that. You would be given an integer as a argument and you have to return its binary form. To get an idea about how to convert a decimal number into a binary number, visit here.

Notes: negative numbers should be handled as two's complement; assume all numbers are integers stored using 4 bytes (or 32 bits) in any language.

Your output should ignore leading 0s.

Examples (input --> output):
3  --> "11"
-3 -->"11111111111111111111111111111101"
Be Ready for Large Numbers. Happy Coding ^_^

*/

function toBinary(n){
    const binaryString = n >= 0 ? n.toString(2) : (2 ** 32 + n).toString(2);
    return binaryString;
}
//toBinary=n=>(n>=0?n:2**32+n).toString(2)

//toBinary=n=>(n>>>0).toString(2)
