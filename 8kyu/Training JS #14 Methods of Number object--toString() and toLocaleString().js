//[8 kyu] Training JS #14: Methods of Number object--toString() and toLocaleString()
const colorOf = (...rgb) => "#"+rgb.map(v=>('0'+v.toString(16)).substr(-2)).join("")