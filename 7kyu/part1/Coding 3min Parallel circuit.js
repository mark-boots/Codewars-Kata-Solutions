/*
Coding 3min : Parallel circuit
https://www.codewars.com/kata/571654c3347e6533fa00186b/train/javascript

Task:
In theory, A parallel circuit can have a lot of branch circuit, the total resistance of the parallel circuit is related to the resistance value of the branch circuit:

the reciprocal of the total resistance of a parallel circuit is equal to the sum of the reciprocal of the branch resistances.

Given parameter:

2D array arr they are each branch circuit of parallel circuits. thay contains some resistance value of electric appliances in the branch circuit.

Please calculate and return the total resistance of the parallel circuit.

The answer has to be accurate up to +/-0.01.

Formula:

                R : total resistance, 
    r1,r2,r3...rn : resistance value of the branch circuit
    
       ∵  1/R=1/r1+1/r2+1/r3...+1/rn
       ∴  R=1/(1/r1+1/r2+1/r3...+1/rn)
Examples:
example1:
arr=[[1],[1]]
R = 1/(1/1+1/1)= 0.5
So, resistance([[1],[1]])=0.5

example2:
arr=[[1],[2]]
R = 1/(1/1+1/2)= 0.67
So, resistance([[1],[2]])=0.67

example3:
arr=[[1],[2,3]]
R = 1/(1/1+1/5)= 0.83
So, resistance([[1],[2,3]])=0.83

*/

function resistance(arr){
  return +(1 / arr.reduce((acc, cur) => acc + 1 / cur.reduce((a, c) => a + c), 0)).toFixed(2);
}