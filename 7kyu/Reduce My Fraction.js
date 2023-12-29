/*
Reduce My Fraction
https://www.codewars.com/kata/576400f2f716ca816d001614/train/javascript


Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

*/

const gcd = (a, b) => b ? gcd(b, a%b) : a

const reduce = ([numerator, denominator]) => {
  const x = gcd(numerator, denominator);
  return [numerator/x, denominator/x]
}