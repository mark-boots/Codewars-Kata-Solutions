//[7 kyu] Chicken Sexing
const correctness = (b, e) => b.reduce((p,v,i) => p += v == e[i] ? 1 : [v,e[i]].includes('?') ? 0.5 : 0 , 0)