/*
Playing with Sets : Complement
https://www.codewars.com/kata/5884e9ccf72916207900010f/train/javascript

Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Complement

Two sets can be "subtracted". The relative complement of B in A, denoted by A \ B (or A − B), is the set of all elements that are members of A but not members of B. Note that it is valid to "subtract" members of a set that are not in the set, such as removing the element green from the set {1, 2, 3}; doing so has no effect.

Examples:
  {1, 2} \ {1, 2} = ∅.
  {1, 2, 3, 4} \ {1, 3} = {2, 4}.
Task
Create function diff getting 2 sets as arguments and returning a new Set as result of relative complement of second set in first.

Examples:
A = new Set([1,2]);
B = new Set([2,3]);

diff(A,B) // -> {1}
diff(B,A) // -> {3}
 
*/
diff=(a,b)=>new Set([...a].filter(v=>!b.has(v)))