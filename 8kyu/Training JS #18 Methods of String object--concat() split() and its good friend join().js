//[8 kyu] 
const splitAndMerge=(str,sep)=>str.split(' ').map(w=>w.split('').join(sep)).join(' ')