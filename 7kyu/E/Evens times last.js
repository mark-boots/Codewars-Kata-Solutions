/*
Evens times last
https://www.codewars.com/kata/5a1a9e5032b8b98477000004

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

function evenLast(numbers, last = numbers[numbers.length - 1]) {
    return numbers.reduce((sum,value,index) => sum + (index % 2 === 0 ? value * last : 0), 0)
}