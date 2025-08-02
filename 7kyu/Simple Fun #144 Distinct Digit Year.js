/*
Simple Fun #144: Distinct Digit Year
https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

Task
The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

Input/Output
[input] integer year
1000 ≤ year ≤ 9000

[output] an integer
the minimum year number that is strictly larger than the input number year and all its digits are distinct.
*/

const distinctDigitYear = y => new Set([...""+(++y)]).size == 4 ? y : distinctDigitYear(y)