/*
https://www.codewars.com/kata/58311faba317216aad000168/train/javascript
Given some positive integers, I wish to print the integers such that all take up the same width by adding a minimum number of leading zeroes. No leading zeroes shall be added to the largest integer.

For example, given 1, 23, 2, 17, 102, I wish to print out these numbers as follows:

001
023
002
017
102
*/

printNums=(...a)=>a.map(x=>`${x}`.padStart(`${Math.max(...a)}`.length,'0')).join`\n`
