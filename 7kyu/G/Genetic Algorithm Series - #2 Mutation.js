/*
Genetic Algorithm Series - #2 Mutation
https://www.codewars.com/kata/567b39b27d0a4606a5000057/train/javascript

Mutation is a genetic operator used to maintain genetic diversity from one generation of a population of genetic algorithm chromosomes to the next.

Mutation

A mutation here may happen on zero or more positions in a chromosome. It is going to check every position and by a given probability it will decide if a mutation will occur.

A mutation is the change from 0 to 1 or from 1 to 0.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.

*/

mutate=(c,p)=>c.replace(/./g,b=>Math.random()<p?b^1:b)
mutate=(c,p)=>c.replace(/./g,m=>m^(Math.random()<p))