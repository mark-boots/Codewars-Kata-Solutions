/*
Simple Fun #157: Counting Triangles
https://www.codewars.com/kata/58ad29bc4b852b14a4000050/train/javascript

Task
Given some sticks by an array V of positive integers, where V[i] represents the length of the sticks, find the number of ways we can choose three of them to form a triangle.

Example
For V = [2, 3, 7, 4], the result should be 1.

There is only (2, 3, 4) can form a triangle.

For V = [5, 6, 7, 8], the result should be 4.

(5, 6, 7), (5, 6, 8), (5, 7, 8), (6, 7, 8)

Input/Output
[input] integer array V
stick lengths

3 <= V.length <= 100

0 < V[i] <=100

[output] an integer
number of ways we can choose 3 sticks to form a triangle.

*/

function countingTriangles(V) {
  V.sort((a,b)=>a-b);
  count = 0;
  for(let a = 0; a < V.length - 2; a++){
    for(let b = a+1; b < V.length - 1; b++){
      for(let c = b+1; c < V.length; c++){
        if(V[a]+V[b] > V[c]) count++;
      }
    }
  }
  return count;
}

countingTriangles=v=>v.sort((a,b)=>a-b).flatMap((x,i)=>v.slice(i+1).flatMap((y,j)=>v.slice(i+j+2).map(z=>x+y>z))).reduce((a,b)=>a+b,0)