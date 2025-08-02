/*
Same Birthday Probability
https://www.codewars.com/kata/5419cf8939c5ef0d50000ef2/train/javascript

Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05

*/

calculateProbability=n=>(n<=1?0:(1-[...Array(n)].reduce((p,_,i)=>p*(365-i)/365,1))).toFixed(2);