//[8 kyu] Training JS #29: methods of arrayObject---concat() and join()
const bigToSmall = arr => [].concat(...arr).sort((a,b)=>b-a).join(">")