/*
Calculate Julie's Age
https://www.codewars.com/kata/558445a88826e1376b000011/train/javascript

Julie is x years older than her brother, and she is also y times as old as him.

Given x and y, create a function calculating Julie's age.

For example:

x: 6
y: 3
output: 9
Note also that x can be negative, and y can be a decimal.

x: -15, 
y: 0.25
output: 5
That is, Julie is 15 years younger and 0.25 times the age of her brother.

Do not concern yourself with the imperfections inherent in dividing by floating point numbers, as your answer will have a tolerance of 1e-9. Also, for the sake of simplicity, Julie is never the same age as her brother.

*/
age=(x,y)=>x*y/(y-1)