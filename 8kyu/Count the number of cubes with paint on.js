//[8 kyu] Count the number of cubes with paint on
const countSquares = cuts => (cuts ? 6 * cuts**2 + 2 : 1)