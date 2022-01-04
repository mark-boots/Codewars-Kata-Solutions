//[7 kyu] Sort by Last Char
const lc = s => s.substr(-1);
const last = x => x.split` `.sort((a,b)=> lc(a).localeCompare(lc(b)));