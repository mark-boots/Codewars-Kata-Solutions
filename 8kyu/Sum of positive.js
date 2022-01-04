//[8 kyu] Sum of positive
const positiveSum = arr => arr.reduce((a,b)=>a+(b>0?b:0),0)