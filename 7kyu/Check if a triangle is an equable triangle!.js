/*
Check if a triangle is an equable triangle!
https://www.codewars.com/kata/57d0089e05c186ccb600035e

A triangle is called an equable triangle if its area equals its perimeter. Return true, if it is an equable triangle, else return false. You will be provided with the length of sides of the triangle. Happy Coding!

*/

function equableTriangle(a,b,c) {
    const p = a+b+c;
    const s = p/2;
    const ar = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return p == ar;
}

// equableTriangle=(a,b,c,p=(a+b+c)/2)=>4*p==(p-a)*(p-b)*(p-c)
