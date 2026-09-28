/*
Is There an Odd Bit?
https://www.codewars.com/kata/5d6f49d85e45290016bf4718


Return 1 when any odd bit of x equals 1; 0 otherwise.

Assume that:

    x is an unsigned, 32-bit integer;
    the bits are zero-indexed (the least significant bit is position 0)

Examples

  2  -->  1 (true) because at least one odd bit is 1 (2 = 0b10)
  5  -->  0 (false) because none of the odd bits are 1 (5 = 0b101)
170  -->  1 (true) because all of the odd bits are 1 (170 = 0b10101010)

*/
const anyOdd = x => x.toString(2).split``.reverse().some((v,i)=>v&i)*1