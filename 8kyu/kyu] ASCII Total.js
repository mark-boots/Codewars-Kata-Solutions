//[8 kyu] ASCII Total
const uniTotal = c => [...c].reduce((s,v)=>s+v.charCodeAt(),0)