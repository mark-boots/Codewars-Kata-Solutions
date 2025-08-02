/*
Order of weight
https://www.codewars.com/kata/59ff4709ba2a14501500003a

Given an array of strings, sort the array into order of weight from light to heavy.

Weight units are grams(G), kilo-grams(KG) and tonnes(T).

Arrays will always contain correct and positive values aswell as uppercase letters.

*/

const toKG = weight => ([value, unit] = weight.match(/\d+|\D+/g), +value * {G:0.0001, KG:1, T:1000}[unit])

const arrange = arr => arr.sort((a,b) => toKG(a) - toKG(b))