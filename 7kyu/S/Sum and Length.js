/*
Sum and Length
https://www.codewars.com/kata/571965ccdf7fdb10a00000ea/train/javascript

Sum and Length
In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.

Knowing that the first 0 is negative, the second is positive, the third is negative, and so on...

Examples
[-1,2,3,4,0,1,0,-2,0,-3]

==> '10 5'

sum of positives: 10 = 2 + 3 + 4 + 0 (second) + 1
count of negatives: 5 ( -1, 0 (first), -2, 0 (third), -3 )

*/

function sumLength(a){
  const [sum, neg, _] = a.reduce(
    ([s,n,z],v) =>
      v>0 ? [s+v, n, z] :
      v<0 ? [s, n+1, z] :
      z%2 ? [s, n, z+1] : [s, n+1, z+1],
    [0,0,0]
  )
  return `${sum} ${neg}`
}