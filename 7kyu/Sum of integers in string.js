/*
Sum of integers in string
https://www.codewars.com/kata/598f76a44f613e0e0b000026

Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

*/

const sumOfIntegersInString = s => (s.match(/\d+/g)||[]).reduce((sum,val)=> +val + sum, 0)