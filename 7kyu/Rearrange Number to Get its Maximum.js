//[7 kyu] Rearrange Number to Get its Maximum
const maxRedigit = n => (n = ''+n).length !==3  ? null : +[...n].sort().reverse().join('')