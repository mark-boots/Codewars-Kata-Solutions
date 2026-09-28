/*
Numbers with this digit inside
https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript

You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

*/

function numbersWithDigitInside(x, d) {
  
  const [length, sum, product ] = Array
    .from({length: x}, (_, i) => i + 1)
    .reduce(([l, s, p], v) => v.toString().includes(d) ? [l+1, s+v, p*v] : [l,s,p], [0, 0, 1])
                                                 
  return [ length, sum, length ? product : 0]
}