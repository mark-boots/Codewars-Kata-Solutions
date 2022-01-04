//[7 kyu] Is this a triangle?
const isTriangle = (...arg) => arg.sort((a,b)=>b-a).reduce((a,b)=>a-b) < 0