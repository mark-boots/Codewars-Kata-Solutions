//[8 kyu] Find out whether the shape is a cube
const cubeChecker = (volume, side) => side < 1 ? false : Math.pow(side,3) == volume