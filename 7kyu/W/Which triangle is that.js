/*
Which triangle is that?
https://www.codewars.com/kata/564d398e2ecf66cec00000a9

Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

It has to return a string with the type of triangle.
For example:

typeOfTriangle(2,2,1) --> "Isosceles"

*/

const typeOfTriangle = (sideA, sideB, sideC) =>{ 
    const [a,b,c] = [sideA,sideB,sideC].sort((x,y)=>x-y)
    return (
      [a,b,c].some(v=>typeof v !== 'number') || a + b <= c ? "Not a valid triangle" :
      a == b && b == c ? "Equilateral" : 
      a == b || a == c || b == c ? "Isosceles" : "Scalene"
    )
  }