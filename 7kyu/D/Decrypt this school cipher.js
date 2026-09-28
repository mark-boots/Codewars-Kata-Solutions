/*
Decrypt this school cipher
https://www.codewars.com/kata/5cd48cffaae6e30018943175
*/

const REV = x => x.split``.reverse().join``

const decrypt = s => REV(s.replace(/'(\d+)'/g,(m,$)=>String.fromCharCode($)))
