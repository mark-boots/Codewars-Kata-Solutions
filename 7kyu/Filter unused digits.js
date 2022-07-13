/*
Filter unused digits
https://www.codewars.com/kata/55de6173a8fbe814ee000061

Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.

*/

const unusedDigits = (...x) => [...'0123456789'].filter(v=>!x.join``.includes(v)).join``