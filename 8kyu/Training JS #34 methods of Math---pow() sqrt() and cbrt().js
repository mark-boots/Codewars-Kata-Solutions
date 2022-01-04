//[8 kyu] Training JS #34: methods of Math---pow() sqrt() and cbrt()
const isIntCube = n => Number.isInteger(Math.cbrt(n))
const cutCube = (volume, n) => isIntCube(n) && isIntCube(volume / n)