/*
Digits Average
https://www.codewars.com/kata/5a32526ae1ce0ec0f10000b2

Given an integer, take the (mean) average of each pair of consecutive digits. Repeat this process until you have a single integer, then return that integer. e.g.

Note: if the average of two digits is not an integer, round the result up (e.g. the average of 8 and 9 will be 9)

Examples
digitsAverage(246)  ==>  4

original: 2   4   6
           \ / \ /
1st iter:   3   5
             \ /
2nd iter:     4


digitsAverage(89)  ==>  9

original: 8   9
           \ /
1st iter:   9

*/

function digitsAverage(input) {
    let digits = input.toString().split("").map(Number);
    while (digits.length > 1) {
      digits = digits.slice(1).reduce((arr,v,i)=>{
        return arr.concat(Math.ceil((v+digits[i])/2))
      },[]);
    }
    return digits[0]
}