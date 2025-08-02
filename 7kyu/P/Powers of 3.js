/*
Powers of 3
https://www.codewars.com/kata/57be674b93687de78c0001d9

Given a positive integer N, return the largest integer k such that 3^k < N.

For example,

3 --> 0
4 --> 1
You may assume that the input to your function is always a positive integer.

*/
function powersOfThree(n) {
  let k = 0;
  while (3 ** k < n) {
    k++;
  }
  return k - 1;
}