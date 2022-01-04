//[8 kyu] Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
const howManySmaller = (arr,n) => arr.filter(v=> Math.round(v * 100) / 100 < n).length