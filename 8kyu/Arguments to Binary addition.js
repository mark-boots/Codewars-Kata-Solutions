//[8 kyu] Arguments to Binary addition
const arr2bin = arr => arr.reduce((a,b) => a + (typeof b=='number' ? b : 0), 0).toString(2)