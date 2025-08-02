/*
Find the majority
https://www.codewars.com/kata/5af974846bf32304a2000e98

Goal

Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.
Example

majority(["A", "B", "A"]) returns "A"
majority(["A", "B", "B", "A"]) returns null


*/

const majority = arr =>
  ([a,b] = [...new Set(arr)].map(l => [l,arr.filter(x=>x==l).length]).sort((a,b)=>b[1]-a[1]),
  !a || (b && a[1] == b[1]) ? null : a[0])