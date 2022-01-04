//[8 kyu] SpeedCode #2 - Array Madness
const sumPowedArray = (arr,pow) => arr.reduce((sum,n)=>sum+(n**pow),0)
const arrayMadness = (a, b) => sumPowedArray(a,2)>sumPowedArray(b,3)