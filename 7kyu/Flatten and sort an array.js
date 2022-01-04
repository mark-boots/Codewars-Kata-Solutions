//[7 kyu] Flatten and sort an array
const flattenAndSort = a => [].concat(...a).sort((a,b)=>a-b)