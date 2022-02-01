/*
Satisfying numbers
https://www.codewars.com/kata/55e7d9d63bdc3caa2500007d

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
Task:
Write

smallest(n)

that will find the smallest positive number that is evenly divisible by all of the numbers from 1 to n (n <= 40).
E.g

smallest(5) == 60 // 1 to 5 can all divide evenly into 60
smallest(10) == 2520

*/

const GCD = (a,b) => b ? GCD(b,a%b) : a

const smallest = n => [...Array(n)].reduce((x,_,i)=>++i*x/GCD(x,i),1)