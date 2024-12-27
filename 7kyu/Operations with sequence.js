/*
Operations with sequence
https://www.codewars.com/kata/596ddaccdd42c1cf0e00005c/train/javascript

Steps

Square the numbers that are greater than zero.
Multiply by 3 every third number.
Multiply by -1 every fifth number.
Return the sum of the sequence.
Example
{ -2, -1, 0, 1, 2 } returns -6

1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6
P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.

*/

const calc = (arr) => {
  return arr.reduce((sum, val, idx) => {
    if (val > 0) val *= val;
    if ((idx + 1) % 3 == 0 ) val *= 3;
    if ((idx + 1) % 5 == 0 ) val *= -1;
    return sum + val
  }, 0)
}