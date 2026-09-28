/*
Age in days
https://www.codewars.com/kata/5803753aab6c2099e600000e

Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"

The birthday is expected to be in the past.
*/

const D = (...d) => new Date(...d).getTime() / 86400000
const ageInDays = (y,m,d) => `You are ${~~Math.abs(D()-D(y,--m,d))} days old`

//or
const ageInDays = (y,m,d) => `You are ${(new Date()-new Date(y,--m,d))/8.64e+7^0} days old`