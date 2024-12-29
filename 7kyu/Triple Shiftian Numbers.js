/*
Triple Shiftian Numbers
https://www.codewars.com/kata/56b7526481290c2ff1000c75/train/javascript

Much cooler than your run-of-the-mill Fibonacci numbers, the Triple Shiftian are so defined: T[n] = 4 * T[n-1] - 5 * T[n-2] + 3 * T[n-3].

You are asked to create a function which accept a base with the first 3 numbers and then returns the nth element.

tripleShiftian([1,1,1],25) == 1219856746
tripleShiftian([1,2,3],25) == 2052198929
tripleShiftian([6,7,2],25) == -2575238999
tripleShiftian([3,2,1],35) == 23471258855679
tripleShiftian([1,9,2],2) ==  2
*/

function tripleShiftian(base, n) {
  if (n < 3) return base[n];
  
  let [t0, t1, t2] = base;
  for (let i = 3; i <= n; i++) {
    [t0, t1, t2] = [t1, t2, 4 * t2 - 5 * t1 + 3 * t0]
  }
  return t2;
}

