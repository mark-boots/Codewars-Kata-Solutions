//[7 kyu] Even numbers in an array
const evenNumbers = (a,n) => a.filter(v => !(v%2)).slice(-n)