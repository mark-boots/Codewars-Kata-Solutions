/*
Make a square box!
https://www.codewars.com/kata/58644e8ddf95f81a38001d8d/train/javascript

Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]

*/

function box(n) {
  return Array.from({length:n},(_,i)=>`-${(i==0||i==n-1?"-":" ").repeat(n-2)}-`)
}