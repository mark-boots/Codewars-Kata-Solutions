/*
Coding 3min: Bug in Apple
https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.

Task:
Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]

*/

function sc(a){
  const x = a.findIndex(a => a.includes("B"));
  const y = a[x].indexOf("B");
  return [x, y]
}