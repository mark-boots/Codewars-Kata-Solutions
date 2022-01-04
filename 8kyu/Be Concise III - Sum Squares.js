//[8 kyu] Be Concise III - Sum Squares
const sumSquares = arr => arr.reduce((sum, val) => val**2 + sum, 0)