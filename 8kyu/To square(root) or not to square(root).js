//[8 kyu] To square(root) or not to square(root)
const squareOrSquareRoot = array => array.map(v=> Number.isInteger(Math.sqrt(v)) ? Math.sqrt(v) : v**2)