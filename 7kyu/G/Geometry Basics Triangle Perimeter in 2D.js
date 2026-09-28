/*
Geometry Basics: Triangle Perimeter in 2D
https://www.codewars.com/kata/58e3e62f20617b6d7700120a/train/javascript

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating perimeter of a Triangle defined this way.

*/
function trianglePerimeter(t) {
  const dist = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);
  return dist(t.a, t.b) + dist(t.b, t.c) + dist(t.c, t.a);
}

// Alternative shorter solution
trianglePerimeter=({a,b,c})=>(d=(p,q)=>Math.hypot(p.x-q.x,p.y-q.y))(a,b)+d(b,c)+d(c,a)
