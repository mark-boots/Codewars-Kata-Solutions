/*
Sum of Odd Cubed Numbers
https://www.codewars.com/kata/580dda86c40fa6c45f00028a

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

function cubeOdd(arr) {
  if (arr.some(val => typeof val !== 'number')) return undefined
  return arr.reduce((sum, val)=> val % 2 == 1 ? sum + val**3: sum, 0)
}

//cubeOdd=a=>a.some(isNaN)?undefined:a.reduce((s,v)=>v&1?s+v**3:s,0)
