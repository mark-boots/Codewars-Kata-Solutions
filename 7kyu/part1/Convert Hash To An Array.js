/*
Convert Hash To An Array
https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript

Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Note: The output array should be sorted alphabetically by key name.

Good Luck!

*/

const convertHashToArray = hash => Object.entries(hash).sort((a,b)=>a[0].localeCompare(b[0]))