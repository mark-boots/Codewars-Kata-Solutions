/*
Simple Fun #12: Count Sum of Two Representions
https://www.codewars.com/kata/5884615cbd573356ab000050/train/javascript

Task
Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

Example
For n = 6, l = 2 and r = 4, the output should be 2

There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4:

6 = 2 + 4 and 6 = 3 + 3

Input/Output
[input] integer n

A positive integer.

Constraints: 5 ≤ n ≤ 106.

[input] integer l

A positive integer.

Constraints: 1 ≤ l ≤ r.

[input] integer r

A positive integer.

Constraints: l ≤ r ≤ 106

[output] an integer

*/

function countSumOfTwoRepresentations(n, l, r) {
    let count = 0;
    
    for (let A = l; A <= r; A++){
      let B = n - A;
      if (l <= A && A <= B && B <= r) count++
    }
    
    return count
  }