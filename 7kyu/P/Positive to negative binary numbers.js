/*
Positive to negative binary numbers
https://www.codewars.com/kata/5becace7063291bebf0001d5

Two's complement is the way most computers represent positive or negative integers. The most significant bit is 1 if the number is negative, and 0 otherwise.

Examples:

[1,1,1,1] = -1

[1,0,0,0] = -8

[1,1,0,1] = -3

To get the two's complement negative notation of an integer, you take the number in binary.

You then flip the bits, and add one (with carry) to the result.

For example:

[0,0,1,0] = 2 in base 10

[1,1,0,1] <- Flip the bits

Add 1 (with carry):

[1,1,1,0] = -2

The output array must have the same length as the input array.
*/

function positiveToNegative(b) {
    const flipped = b.map(el=>Math.abs(el-1))
    const add1 = (parseInt(flipped.join(''),2)+1).toString(2);
    return add1.split('').map(el=>Number(el)).slice(-b.length)
}