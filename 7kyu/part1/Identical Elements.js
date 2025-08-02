/*
Identical Elements
https://www.codewars.com/kata/583ebb9328a0c034490001ba

Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

*/

const duplicateElements = (m, n, s = m.concat(n)) => new Set(s).size < s.length

//

const duplicateElements = (m, n) => m.some(v => n.includes(v))