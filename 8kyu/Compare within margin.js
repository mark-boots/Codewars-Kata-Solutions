//[8 kyu] Compare within margin
const closeCompare = (a, b, margin = 0) => Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1
