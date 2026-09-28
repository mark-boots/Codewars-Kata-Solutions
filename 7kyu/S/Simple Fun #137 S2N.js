/*
Simple Fun #137: S2N
https://www.codewars.com/kata/58a6742c14b042a042000038/train/javascript

Task
Your task is to find the sum for the range 0 ... m for all powers from `0 ... n.

Example
For m = 2, n = 3, the result should be 20

0^0+1^0+2^0 + 0^1+1^1+2^1 + 0^2+1^2+2^2 + 0^3+1^3+2^3 = 20

Note, that no output ever exceeds 2e9.

Input/Output
[input] integer m
0 <= m <= 50000

[input] integer n
0 <= n <= 9

[output] an integer(double in C#)
The sum value.

*/
function S2N(M, N) {
  let sum = 0
  for(let m = 0; m <= M; m++){
    for(let n = 0; n <= N; n++){
      sum+= m**n
    }
  }
  return sum;
}