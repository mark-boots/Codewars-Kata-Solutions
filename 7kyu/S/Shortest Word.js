//[7 kyu] Shortest Word
const findShort = s => Math.min(...s.split(' ').map(v => v.length))