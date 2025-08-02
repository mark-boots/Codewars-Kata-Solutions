//[7 kyu] Understanding closures - the basics
const buildFun = n => Array.from({length: n},(_,i) => ()=> i)
