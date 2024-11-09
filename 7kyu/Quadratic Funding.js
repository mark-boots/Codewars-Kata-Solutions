/*
Quadratic Funding
https://www.codewars.com/kata/670550a8fc404105769b06be/train/javascript

Quadratic funding is way to distribute funds based on quadratic voting. In other words, it's a type of crowd-funding, which prefers projects that are backed by more people, even if their individual contribution is small.

The funding requires a matching pool (e.g. a public fund or donation by companies) and donations by individual supporters.

The math behind is the following: the received funding is proportional to the square of the sum of the square roots of the individual donations (
c
i
c 
i
​
 ). So the weight of a project is: 
(
∑
c
i
)
2
(∑ 
c 
i
​
 
​
 ) 
2
 

See the examples below for more explanation.

Task
Your will receive a list containing the lists of donations per project, and the amount of the matching pool. Your task is to calculate and return the list of fundings received by the projects, rounded to the nearest integer.

Notes:

there will be always at least 2 projects, and all amounts will be positive integers
do not round the square roots or the weights, only the results
You may use this QF calculator to check the tests and/or your results.

Examples
Let's see a simple example, including 2 projects:

Project A
- donations : 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 (10 x 1)
- sum of square roots : √1 + √1 + √1 + ... = 10
- square of this sum  : 10^2 = 100     # weight

Project B
- donations : 10
- sum of square roots : √10 = 3.16...
- square of this sum  : 3.16^2 = 10    # weight

available funds : 20                   # matching pool

total weights : 100 + 10 = 110

funding received (rounded)
- Project A : 20 * 100/110 = 18
- Project B : 20 *  10/110 =  2
Another example, from the link at the top:

Project A
- donations : 5 x 200
- weight : 70.71^2 = 5000

Project B
- donations : 2 x 500
- weight : 44.72^2 = 2000

Project C
- donations : 20 x 50
- weight : 141.42^2 = 20000

matching pool : 10000

funding received (rounded)
- Project A : 1852
- Project B :  741
- Project C : 7407

*/

function qf(donations, pool) {
  const weights = donations.map(don => Math.pow(don.reduce((weight, val) => weight + Math.sqrt(val), 0), 2))
  const totalWeights = weights.reduce((a, b) => a + b, 0)
  const fundings = weights.map(weight => Math.round(pool * weight / totalWeights));
  return fundings
}