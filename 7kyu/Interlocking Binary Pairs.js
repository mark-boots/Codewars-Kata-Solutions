/*
Interlocking Binary Pairs

https://www.codewars.com/kata/628e3ee2e1daf90030239e8a/train/javascript

Task
Write a function that checks if two non-negative integers make an "interlocking binary pair".

Interlock ?
numbers can be interlocked if their binary representations have no 1's in the same place
comparisons are made by bit position, starting from right to left (see the examples below)
when representations are of different lengths, the unmatched left-most bits are ignored
Examples
a = 9, b = 4

Stacking representations shows how they can interlock.

 9    1001
 4     100
Here, no 1's share any position, so the function returns true.


a = 3, b = 6

These representations do not interlock.

 3      11
 6     110
Finding they both have a 1 in the same position, the function returns false.

Input
Two non-negative integers.

Output
Boolean true or false whether or not these integers are interlockable.

Enjoy!

*/

function interlockable(a, b) {
  const f = x => x.toString(2).split("").reverse(), A = f(a), B = f(b);
  for(let i = 0; i < Math.min(A.length, B.length); i++) if(A[i] == '1' && B[i] == '1') return false
  return true
}

// Alternative solution using bitwise operations
interlockable=(a,b)=>!(a&b)