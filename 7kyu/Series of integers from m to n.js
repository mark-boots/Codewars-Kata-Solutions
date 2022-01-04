//[7 kyu] Series of integers from m to n
const generateIntegers = (m, n) => Array.from({length: n-m+1},((v,i)=>m+i))