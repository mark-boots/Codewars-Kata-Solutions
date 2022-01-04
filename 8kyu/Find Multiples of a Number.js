//[8 kyu] Find Multiples of a Number
const findMultiples = (integer, limit) => Array.from({length: Math.floor(limit/integer)}, (_,i) => ++i*integer)