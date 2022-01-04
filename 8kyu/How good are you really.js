//[8 kyu] How good are you really?
const betterThanAverage = (c, y) => y > c.reduce((a,b)=>a+b,0) / c.length;