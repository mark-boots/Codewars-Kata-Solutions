/*
Simple Fun #179: Fraction
https://www.codewars.com/kata/58b8db810f40ea7788000126

Task
Given two integers a and b, return the sum of the numerator and the denominator of the reduced fraction a/b.

Example
For a = 2, b = 4, the result should be 3

Since 2/4 = 1/2 => 1 + 2 = 3.

For a = 10, b = 100, the result should be 11

Since 10/100 = 1/10 => 1 + 10 = 11.

For a = 5, b = 5, the result should be 2

Since 5/5 = 1/1 => 1 + 1 = 2.

Input/Output
[input] integer a
The numerator, 1 ≤ a ≤ 2000.

[input] integer b
The denominator, 1 ≤ b ≤ 2000.

[output] an integer
The sum of the numerator and the denominator of the reduces fraction.

*/

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const fraction = (a, b, x = gcd(a, b)) => a/x + b/x;

//fraction=(a,b,g=(a,b)=>b?g(b,a%b):a,d=g(a,b))=>a/d+b/d