/*
Algorithmic predicament- Bug Fixing #9
https://www.codewars.com/kata/55d3b1f2c1b2f0d3470000a9/train/javascript

Algorithmic predicament - Bug Fixing #9
Oh no! Timmy's algorithm has gone wrong! Help Timmy fix his algorithm!

Task
Your task is to fix Timmy's algorithm so it returns the group name with the highest total age.

You will receive two groups of `people` objects, with two properties `name` and `age`. The name property is a string, and the age property is a number.

Your goal is to calculate the total age of all people with the same name in both groups and return the name of the person with the highest total age. If two names have the same total age, return the first alphabetical name.
*/

highestAge=(a,b)=>Object.entries(a.concat(b).reduce((o,{name:n,age:a})=>(o[n]=(o[n]??0)+a,o),{})).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))[0][0]