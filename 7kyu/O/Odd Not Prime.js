/*
Odd Not Prime
https://www.codewars.com/kata/5a9996fa8e503f2b4a002e7a/train/javascript

For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2

*/

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++)
    if (n % i === 0) return false;
  return true;
}

function oddNotPrime(x) {
  let count = 0;
  for (let i = 1; i <= x; i += 2) {
    if (!isPrime(i)) count++;
  }
  return count;
}
